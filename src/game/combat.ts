import {Unit} from './unit';
import {Ai} from './units/ai';
import {Character} from './character';

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

        this.isEnded = Object.keys(this.units).some(key => this.units[key].character.isDead);
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

    addUnit(player: Unit) {
        player.currentCombat = this;

        if (!player.team) {
            const units = this.unitsArr;

            for (let i = 0; i < this.teams.length; i++) {
                if (!units.some(unit => unit.team === this.teams[i])) {
                    player.team = this.teams[i];
                    break;
                }
            }
        }

        this.units[player.id] = player;

        player.consumeUpdate();
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
        const unit = new Ai(summon.id, team, summon, this);

        this.addUnit(unit);
    }
}