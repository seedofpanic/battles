import {Game} from './game';
import {Player} from './units/player';
import objectContaining = jasmine.objectContaining;
import arrayContaining = jasmine.arrayContaining;

describe('Game', () => {
    let game: Game;
    let player: Player;

    beforeEach(() => {
        game  = new Game();
        player = new Player('1');

        spyOn(player, 'send');
    });

    it('showCharacters показывает доступных персонажей', () => {
        Game.showCharacters(player);

        expect(player.send).toBeCalledWith('select_character', arrayContaining([
                objectContaining({'id': 'barbarian'}),
                objectContaining({'id': 'warrior'}),
                objectContaining({'id': 'mage'}),
                objectContaining({'id': 'vampire'})
            ]));
    });

    describe('isAllowedCharacter проверяет доступность персонажей по названию', () => {
        it('Варвар доступен', () => {
            expect(Game.isAllowedCharacter('barbarian')).toBe(true);
        });

        it('Воин доступен', () => {
            expect(Game.isAllowedCharacter('warrior')).toBe(true);
        });

        it('Маг доступен', () => {
            expect(Game.isAllowedCharacter('mage')).toBe(true);
        });

        it('Ёжик не доступен', () => {
            expect(Game.isAllowedCharacter('Ёжик')).toBeFalsy();
        });
    });
});