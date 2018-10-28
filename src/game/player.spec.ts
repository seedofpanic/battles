import {Player} from './player';
import {DamageTypes} from './models/damageTypes';
import {HitAction} from './actions/hitAction';
import {Combat} from './combat';

describe('Player', () => {
    let player: Player;
    const results: any[] = [];
    const action = new HitAction('', 0, 0, DamageTypes.CUTTING);

    beforeEach(() => {
        player = new Player('1');
        spyOn(player, 'send').and.callFake((action, payload) => {
            results.push(`${action} ${payload}`);
        });
        player.setCharacter('warrior');
        player.currentCombat = new Combat();
    });

    describe('decreaseHp', () => {
        it('normal damage', () => {
            player.character.health = 30;
            player.character.resists[DamageTypes.CUTTING] = 1;

            player.decreaseHp(action, 10);

            expect(player.character.health).toBe(20);
        });

        it('health never goes lower than 0', () => {
            player.character.health = 5;
            player.character.resists[DamageTypes.CUTTING] = 1;

            player.decreaseHp(action, 10);

            expect(player.character.health).toBe(0);
        });

        it('when health goes to 0, player isDead', () => {
            player.character.health = 5;
            player.character.resists[DamageTypes.CUTTING] = 1;
            player.character.isDead = false;

            player.decreaseHp(action, 10);

            expect(player.character.isDead).toBe(true);
        });
    });
});