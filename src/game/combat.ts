import {Unit} from './unit';
import {Ai} from './units/ai';
import {Character} from './character';
import {Player} from './units/player';

let nextSummonId = 1;

export class Combat {
    units: {[name: string]: Unit} = {};
    isEnded = false;
    battleLog: string[] = [];
    teams: string[];

    constructor() {
        this.teams = [
            'team1',
            'team2'
        ];
    }

    get unitsArr(): Unit[] {
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
        units.forEach(unit => unit.resetStats());
        units.forEach(unit => unit.preTick());
        units.forEach(unit => unit.perform(this.units[unit.targetId]));
        units.forEach(unit => unit.postTick());

        units.forEach(unit => {
            unit.character.effects =
                unit.character.effects.filter(effect => !effect.getIsEnded());
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

    addPlayer(player: Player) {
        this.addUnit(player);
        this.setTeamToPlayer(player);
        player.consumeUpdate();
    }

    addUnit(player: Unit) {
        player.currentCombat = this;

        this.units[player.id] = player;
    }

    setTeamToPlayer(player: Player) {
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

    addSummon(summon: Character, team: string) {
        const unit = new Ai(`${summon.id}_${nextSummonId++}`, team, summon, this);

        this.addUnit(unit);
    }

    removeUnit(unit: Unit) {
        delete this.units[unit.id];

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