import {Player} from './player';
import {Combat} from './combat';
import {capitalize} from '../../utils/capitalize';
import {randomBytes} from 'crypto';

export const allowedCharacters: {[name: string]: boolean} = {
    'варвар': true,
    'воин': true,
    'маг': true,
    'вампир': true,
};

export class Game {

    players: {[name: string]: Player} = {};
    combatsQueue: Combat[] = [];
    combatsInvites: {[name: string]: Combat} = {};
    combatsCount = 0;
    combatsEnded = 0;

    static calcDamage(minDamage: number, maxDamage: number) {
        return Math.ceil(Math.random() * (maxDamage - minDamage)) + minDamage;
    }

    startDuel(player: Player, combatId: string | null) {
        let combat: Combat;

        if (combatId === null) {
            const newCombatId = randomBytes(8).toString('hex');

            combat = new Combat();

            this.combatsInvites[newCombatId] = combat;

            player.ws.send('Дуэль создана, передайте ссылку своему оппоненту:');
            player.ws.send(`https://battles.mobmind.ru?start=${newCombatId}`);
        } else {
            combat = this.combatsInvites[combatId];

            delete this.combatsInvites[combatId];
        }

        if (!combat) {
            player.ws.send('Ваша дуэль уже закончилась или была отменена, бросте новый вызов /вызов');

            return;
        }

        this.start(player, combat);
        this.showCharacters(player);
    }

    startCombat(player: Player) {
        const combat = this.getCombatFromQueue();

        if (combat.isFull()) {
            this.combatsQueue.splice(this.combatsQueue.indexOf(combat));
        }

        this.start(player, combat);
        this.showCharacters(player);
    }

    showCharacters(player: Player) {
        player.send({msg: 'выберите персонажа', actions: this.getCharacters()});
    }

    isAllowedCharacter(character: string) {
        return allowedCharacters[character.toLowerCase()];
    }

    getPlayer(chatId: string) {
        return this.players[chatId];
    }

    addPlayer(chatId: string): Player {
        this.players[chatId] = new Player(chatId);

        return this.players[chatId];
    }

    selectCharacter(player: Player, character: string) {

        if (!this.isAllowedCharacter(character)) {
            return;
        }

        if (!player.currentCombat) {
            this.startCombat(player);

            return;
        }

        player.setCharacter(character);

        const combat = player.currentCombat;

        if (combat.isReadyToStart()) {
            combat.start();
        } else {
            player.ws.send('Ожидаем противника');
        }
    }

    private getCharacters() {
        return {reply_markup: {
                keyboard: [
                    Object.keys(allowedCharacters).map(character => {
                        return {text: '/готов ' + capitalize(character)};
                    })
                ],
                one_time_keyboard: true
            }};
    }

    private start(player: Player, combat: Combat) {
        if (player.currentCombat) {
            player.ws.send('Вы уже ожидаете противника, напишите /стоп для выхода из очереди');

            return;
        }

        player.currentCombat = combat;
        combat.addPlayer(player);
        this.combatsCount++;
    }

    private getCombatFromQueue(): Combat {
        if (this.combatsQueue.length > 0) {
            return this.combatsQueue[0];
        } else {
            const combat = new Combat();

            this.combatsQueue.push(combat);

            return combat;
        }
    }
}