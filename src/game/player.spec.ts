import {DamageTypes} from './models/damageTypes';
import {Unit} from './unit';
import {Combat} from './combat';
import {HitAction} from './actions/hitAction';

xdescribe('Unit', () => {
    let unit: Unit;
    const results: any[] = [];
    const action = new HitAction(null, '', 0, 0, DamageTypes.CUTTING);

    beforeEach(() => {
        unit = new Unit('1');
        spyOn(unit, 'send').and.callFake((action, payload) => {
            results.push(`${action} ${payload}`);
        });
        unit.setCharacter('warrior');
        unit.currentCombat = new Combat();
    });

    describe('decreaseHp', () => {
        it('normal damage', () => {
            unit.character.health = 30;
            unit.character.resists[DamageTypes.CUTTING] = 1;

            unit.decreaseHp(action, 10, DamageTypes.CUTTING);

            expect(unit.character.health).toBe(20);
        });

        it('health never goes lower than 0', () => {
            unit.character.health = 5;
            unit.character.resists[DamageTypes.CUTTING] = 1;

            unit.decreaseHp(action, 10, DamageTypes.CUTTING);

            expect(unit.character.health).toBe(0);
        });

        it('when health goes to 0, unit isDead', () => {
            unit.character.health = 5;
            unit.character.resists[DamageTypes.CUTTING] = 1;
            unit.character.isDead = false;

            unit.decreaseHp(action, 10, DamageTypes.CUTTING);

            expect(unit.character.isDead).toBe(true);
        });
    });
});