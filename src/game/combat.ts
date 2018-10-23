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
            return !!this.players[id].action;
        });
    }

    perform() {
        const ids = Object.keys(this.players);

        this.players[ids[0]].perform(this.players[ids[1]]);
        this.players[ids[1]].perform(this.players[ids[0]]);
        this.players[ids[0]].tick();
        this.players[ids[1]].tick();

        this.isEnded = Object.keys(this.players).some(key => this.players[key].isDead);
    }

    showResult() {
        Object.keys(this.players).forEach(id => {
            const player = this.players[id];

            Object.keys(this.players).forEach(sendId => {
                this.players[sendId].send('character_update', {
                    id,
                    data: {
                        health: player.health
                    }
                });
            });

            player.send('note', this.battleLog.join('\n'));

            if (this.isEnded) {
                player.send('note', this.getDeadResult(id));

                player.currentCombat = undefined;
            } else {
                player.send('note', this.getRoundResult(id));
                player.send('select_skill', this.getActions(player));
            }
        });

        this.battleLog.length = 0;
    }

    getRoundResult(myId: string): string {
        return Object.keys(this.players).map(key => {
            const player = this.players[key];

            if (myId === player.chatId.toString()) {
                return `у вас осталось ${Math.ceil(player.health)}/${Math.ceil(player.healthMax)} здоровья`;
            } else {
                return `у противника ${Math.ceil(player.health)}/${Math.ceil(player.healthMax)} здоровья`;
            }
        }).join('\n');
    }

    getDeadResult(myId: string): string {
        return Object.keys(this.players)
            .map(id => {
                if (this.players[id].isDead) {
                    if (myId === id) {
                        return 'Вы побеждены, игра окончена';
                    } else {
                        return 'Ваш противник побежден, игра окончена';
                    }
                }
            }).join('');
    }

    getVsMessage(): string {
        const players = this.playersArr;

        return `${players[0].getName()} vs ${players[1].getName()}`;
    }

    getActions(player: Player) {
        if (player.action) {
            return {};
        }

        return Object.keys(player.actions)
                        .filter(action => player.actions[action].isAvailable())
                        .map(action => ({id: action, name: player.actions[action].name}));
    }

    start() {
        Object.keys(this.players).forEach(chatId => {
            this.players[chatId].send('note', 'Противник найден\n' + this.getVsMessage());
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
                        name: playerTo.getName(),
                        healthMax: playerTo.healthMax,
                        health: playerTo.health
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