import {ICombat} from '../models/combat';
import {IPlayer} from '../models/player';
import {IUnit} from '../models/unit';
import {ICharacter} from '../models/character';

export class Combat implements ICombat {
    characters: {[name: string]: ICharacter} = {};
    isEnded = false;
    battleLog: string[] = [];
    teams: string[];

    constructor() {
        this.teams = [
            'team1',
            'team2'
        ];
    }

    get charactersArr(): ICharacter[] {
        return Object.keys(this.characters).map(key => this.characters[key]);
    }

    allReady(): boolean {
        return Object.keys(this.characters).every(id => {
            return !!this.characters[id].isReady();
        });
    }

    perform() {
        const characters = this.charactersArr;

        characters.forEach(character => character.beforeResolve(this.characters[character.targetId]));
        characters.forEach(character => character.preTick());
        characters.forEach(character => character.perform(this.characters[character.targetId]));
        characters.forEach(character => character.postTick());

        characters.forEach(character => {
            character.effects =
                character.effects.filter(effect => {
                    const isEnded = effect.getIsEnded();

                    if (isEnded) {
                        effect.onRemove(character);
                    }

                    return !isEnded;
                });
        });

        this.checkIsEnded();
    }

    checkIsEnded() {
        const team1IsDead = !Object.keys(this.characters).some(key => {
            return (this.characters[key].team === this.teams[0]) &&
                this.characters[key].isValuable &&
                !this.characters[key].isDead;
        });
        const team2IsDead = !Object.keys(this.characters).some(key => {
            return (this.characters[key].team === this.teams[1]) &&
                this.characters[key].isValuable &&
                !this.characters[key].isDead;
        });

        this.isEnded = team1IsDead || team2IsDead;
    }

    sendHealth() {
        const characters = this.charactersArr;
        characters.forEach(characterTo => {
            characters.forEach(character => {
                characterTo.send('note',
                    `${character.name} \ 
                    ${character.health.toFixed(2)}/${character.healthMax.toFixed(2)}`);
            });
        });
    }

    showResult() {
        Object.keys(this.characters).forEach(id => {
            const character = this.characters[id];

            character.broadcastUpdate();

            character.send('note', this.battleLog.join('\n'));

            if (this.isEnded) {
                character.send('note', this.getDeadResult(id));

                return;
            }

            character.sendSkills();
        });

        if (this.isEnded) {
            Object.keys(this.characters).forEach(id => {
                this.removeCharacter(this.characters[id]);
            });
        }

        this.battleLog.length = 0;
    }

    getDeadResult(myId: string): string {
        return Object.keys(this.characters)
            .map(id => {
                if (this.characters[id].isDead) {
                    if (myId === id) {
                        return 'You died, the duel is over';
                    } else {
                        return 'Your opponent is dead, the duel is over';
                    }
                }
            }).join('');
    }

    getVsMessage(): string {
        const characters = this.charactersArr;

        return `${characters[0].name} vs ${characters[1].name}`;
    }

    start() {
        Object.keys(this.characters).forEach(chatId => {
            this.characters[chatId].send('note', 'Opponent found: ' + this.getVsMessage());
            this.characters[chatId].sendSkills();
        });
    }

    addCharacter(character: ICharacter, team: string = null) {
        character.combat = this;

        this.characters[character.id] = character;

        if (!team) {
            this.setTeamToCharacter(character);
            character.consumeUpdate();
        }

        character.broadcastUpdate();
    }

    setTeamToCharacter(character: ICharacter) {
        const characters = this.charactersArr;

        for (let i = 0; i < this.teams.length; i++) {
            if (!characters.some(c => c.team === this.teams[i])) {
                character.team = this.teams[i];
                break;
            }
        }

        character.send('set_teams', {
            myTeam: character.team,
            opponentTeam: this.teams.filter(team => character.team !== team)[0]
        });
    }

    isFull() {
        return Object.keys(this.characters).length === 2;
    }

    isReadyToStart(): boolean {
        return this.isFull();
    }

    removeCharacter(character: ICharacter) {
        delete this.characters[character.id];

        character.send('set_in_battle', false);
        this.broadcast('remove_unit', {
            id: character.id,
            team: character.team
        });
    }

    broadcast(type: string, payload: any) {
        Object.keys(this.characters).forEach(key => {
            this.characters[key].send(type, payload);
        });
    }
}