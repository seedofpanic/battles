import {Player} from './player';

export class Combat {
    players: {[name: string]: Player} = {};
    isEnded = false;
    battleLog: string[] = [];

    get playersArr(): Player[] {
        return Object.keys(this.players).map(key => this.players[key]);
    }

    allReady(): boolean {
        return Object.keys(this.players).every(id => {
            return !!this.players[id].character.action;
        });
    }

    perform() {
        const ids = Object.keys(this.players);

        this.players[ids[0]].perform(this.players[ids[1]]);
        this.players[ids[1]].perform(this.players[ids[0]]);
        this.players[ids[0]].tick();
        this.players[ids[1]].tick();

        this.isEnded = Object.keys(this.players).some(key => this.players[key].character.isDead);
    }

    showResult() {
        Object.keys(this.players).forEach(id => {
            const player = this.players[id];

            Object.keys(this.players).forEach(sendId => {
                this.players[sendId].send('character_update', {
                    id,
                    data: {
                        health: player.character.health,
                        effects: player.character.effects.map(effect => ({
                            id: effect.id,
                            name: effect.name,
                            ticks: effect.roundsCount
                        }))
                    }
                });
            });

            player.send('note', this.battleLog.join('\n'));

            if (this.isEnded) {
                player.send('note', this.getDeadResult(id));

                player.currentCombat = undefined;

                return;
            }

            player.send('select_skill', this.getActions(player));
        });

        this.battleLog.length = 0;
    }

    getDeadResult(myId: string): string {
        return Object.keys(this.players)
            .map(id => {
                if (this.players[id].character.isDead) {
                    if (myId === id) {
                        return 'You died, the duel is over';
                    } else {
                        return 'Your opponent is dead, the duel is over';
                    }
                }
            }).join('');
    }

    getVsMessage(): string {
        const players = this.playersArr;

        return `${players[0].getName()} vs ${players[1].getName()}`;
    }

    getActions(player: Player) {
        if (player.character.action) {
            return {};
        }

        return Object.keys(player.character.actions)
                        .filter(action => player.character.actions[action].isAvailable())
                        .map(action => ({id: action, name: player.character.actions[action].name}));
    }

    start() {
        Object.keys(this.players).forEach(chatId => {
            this.players[chatId].send('note', 'Opponent found: ' + this.getVsMessage());
            this.players[chatId].send('select_skill', this.getActions(this.players[chatId]));
        });
    }

    addPlayer(player: Player) {
        this.players[player.chatId] = player;

        Object.keys(this.players).forEach(id => {
            const playerTo = this.players[id];

            if (playerTo.character) {
                player.send('character_update', {
                    id: playerTo.chatId,
                    data: {
                        id: playerTo.character.id,
                        name: playerTo.getName(),
                        healthMax: playerTo.character.healthMax,
                        health: playerTo.character.health
                    }
                });
            }

            if (player.chatId === playerTo.chatId) {
                player.send('set_my_id', playerTo.chatId);
            } else {
                player.send('set_opponent_id', playerTo.chatId);
                playerTo.send('set_opponent_id', player.chatId);
            }
        });
    }

    isFull() {
        return Object.keys(this.players).length === 2;
    }

    isReadyToStart(): boolean {
        return this.isFull() &&
            Object.keys(this.players).every(id => {
                return !!this.players[id].character;
            });
    }
}