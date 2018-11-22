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
        game.showCharacters(player);

        expect(player.send).toBeCalledWith('select_character', arrayContaining([
                objectContaining({'id': 'barbarian'}),
                objectContaining({'id': 'warrior'}),
                objectContaining({'id': 'mage'}),
                objectContaining({'id': 'vampire'})
            ]));
    });

    describe('isAllowedCharacter проверяет доступность персонажей по названию', () => {
        it('Варвар доступен', () => {
            expect(game.isAllowedCharacter('barbarian')).toBe(true);
        });

        it('Воин доступен', () => {
            expect(game.isAllowedCharacter('warrior')).toBe(true);
        });

        it('Маг доступен', () => {
            expect(game.isAllowedCharacter('mage')).toBe(true);
        });

        it('Ёжик не доступен', () => {
            expect(game.isAllowedCharacter('Ёжик')).toBeFalsy();
        });
    });
});