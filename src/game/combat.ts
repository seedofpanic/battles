import {ICombat} from '../models/combat';
import {IPlayer} from '../models/player';
import {IUnit} from '../models/unit';

export class Combat implements ICombat {
    units: {[name: string]: IUnit} = {};
    isEnded = false;
    battleLog: string[] = [];
    teams: string[];

    constructor() {
        this.teams = [
            'team1',
            'team2'
        ];
    }

    get unitsArr(): IUnit[] {
        return Object.keys(this.units).map(key => this.units[key]);
    }

    allReady(): boolean {
        return Object.keys(this.units).every(id => {
            return !!this.units[id].isReady();
        });
    }

    perform() {
        const units = this.unitsArr;

        units.forEach(unit => unit.beforeResolve(this.units[unit.targetId]));
        units.forEach(unit => unit.preTick());
        units.forEach(unit => unit.perform(this.units[unit.targetId]));
        units.forEach(unit => unit.postTick());

        units.forEach(unit => {
            unit.character.effects =
                unit.character.effects.filter(effect => {
                    const isEnded = effect.getIsEnded();

                    if (isEnded) {
                        effect.onRemove(unit);
                    }

                    return !isEnded;
                });
        });

        const team1IsDead = Object.keys(this.units).every(key => {
            return (this.units[key].team === this.teams[0]) ||
                (!this.units[key].isValuable ||
                    this.units[key].character.isDead);
        });
        const team2IsDead = Object.keys(this.units).every(key => {
            return (this.units[key].team === this.teams[1]) ||
                (!this.units[key].isValuable ||
                    this.units[key].character.isDead);
        });

        this.isEnded = team1IsDead || team2IsDead;
    }

    sendHealth() {
        const units = this.unitsArr;
        units.forEach(unitTo => {
            units.forEach(unit => {
                unitTo.send('note',
                    `${unit.character.name} \ 
                    ${unit.character.health.toFixed(2)}/${unit.character.healthMax.toFixed(2)}`);
            });
        });
    }

    showResult() {
        Object.keys(this.units).forEach(id => {
            const unit = this.units[id];

            unit.broadcastUpdate();

            unit.send('note', this.battleLog.join('\n'));

            if (this.isEnded) {
                unit.send('note', this.getDeadResult(id));

                unit.currentCombat = undefined;

                return;
            }

            unit.sendSkills();
        });

        if (this.isEnded) {
            Object.keys(this.units).forEach(id => {
                this.units[id].currentCombat = null;
            });
        }

        this.battleLog.length = 0;
    }

    getDeadResult(myId: string): string {
        return Object.keys(this.units)
            .map(id => {
                if (this.units[id].character.isDead) {
                    if (myId === id) {
                        return 'You died, the duel is over';
                    } else {
                        return 'Your opponent is dead, the duel is over';
                    }
                }
            }).join('');
    }

    getVsMessage(): string {
        const units = this.unitsArr;

        return `${units[0].getName()} vs ${units[1].getName()}`;
    }

    start() {
        Object.keys(this.units).forEach(chatId => {
            this.units[chatId].send('note', 'Opponent found: ' + this.getVsMessage());
            this.units[chatId].sendSkills();
        });
    }

    addPlayer(player: IPlayer) {
        this.addUnit(player);
        this.setTeamToPlayer(player);
        player.consumeUpdate();
    }

    addUnit(player: IUnit) {
        player.currentCombat = this;

        this.units[player.id] = player;
    }

    setTeamToPlayer(player: IPlayer) {
        const units = this.unitsArr;

        for (let i = 0; i < this.teams.length; i++) {
            if (!units.some(unit => unit.team === this.teams[i])) {
                player.team = this.teams[i];
                break;
            }
        }

        player.send('set_teams', {
            myTeam: player.team,
            opponentTeam: this.teams.filter(team => player.team !== team)[0]
        });
    }

    isFull() {
        return Object.keys(this.units).length === 2;
    }

    isReadyToStart(): boolean {
        return this.isFull() &&
            Object.keys(this.units).every(id => {
                return !!this.units[id].character;
            });
    }

    addSummon(unit: IUnit) {
        this.addUnit(unit);
    }

    removeUnit(unit: IUnit) {
        delete this.units[unit.id];
        unit.currentCombat = null;

        this.broadcast('remove_unit', {
            id: unit.id,
            team: unit.team
        });
    }

    broadcast(type: string, payload: any) {
        Object.keys(this.units).forEach(key => {
            this.units[key].send(type, payload);
        });
    }
}