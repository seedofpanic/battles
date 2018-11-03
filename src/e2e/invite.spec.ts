import {doAction} from '../index';
import * as crypto from 'crypto';
import {Player} from '../game/units/player';

xdescribe('bot', () => {

    const results: string[] = [];
    let player1: Player;
    let player2: Player;

    beforeAll(() => {
        spyOn(console, 'log').and.callFake(msg => results.push(msg));
        spyOn(Math, 'random').and.returnValue(0.5);
    });

    beforeEach(() => {
        player1 = new Player('1');
        player2 = new Player('2');
        results.length = 0;

        spyOn(player1, 'send').and.callFake((action, payload) => {
            results.push(`${action} ${payload}`);
        });
        spyOn(player2, 'send').and.callFake((action, payload) => {
            results.push(`${action} ${payload}`);
        });
    });

    it('Первый игрок запрашивает приватный бой', () => {
        spyOn(crypto, 'randomBytes').and.returnValue('testhash');
        doAction(player1, 'invite');

        expect(results).toEqual([
            {'chatId': '1', 'options': undefined, 'text': 'Дуэль создана, передайте ссылку своему оппоненту:'},
            {'chatId': '1', 'options': undefined, 'text': 'https://t.me/@testbot?start=testhash'}, {
            'chatId': '1',
            'options': {
                'reply_markup': {
                    'keyboard': [[{'text': '/готов Варвар'},
                            {'text': '/готов Воин'},
                            {'text': '/готов Маг'},
                            {'text': '/готов Вампир'},
                        ]],
                    'one_time_keyboard': true
                }
            },
            'text': 'выберите персонажа'
        }]);
    });

    it('Второй игрок перешел по кривой ссылке', () => {
        doAction(2, '/start duel10');

        expect(results).toEqual([{
            'chatId': '2',
            'options': undefined,
            'text': 'Ваша дуэль уже закончилась или была отменена, бросте новый вызов /вызов'
        }]);
    });

    it('Второй игрок перешел по ссылке', () => {
        doAction(2, '/start testhash');

        expect(results).toEqual([{
            'chatId': '2',
            'options': {
                'reply_markup': {
                    'keyboard': [[{'text': '/готов Варвар'},
                            {'text': '/готов Воин'},
                            {'text': '/готов Маг'},
                            {'text': '/готов Вампир'},
                        ]],
                    'one_time_keyboard': true
                }
            },
            'text': 'выберите персонажа'
        }]);
    });

    it('Ссылка на дуэль более не доступна', () => {
        doAction(2, '/start duel0');

        expect(results).toEqual([{
            'chatId': '2',
            'options': undefined,
            'text': 'Ваша дуэль уже закончилась или была отменена, бросте новый вызов /вызов'
        }]);
    });

    it('Первый игрок сообщил что готов играть за Воина', () => {
        doAction(1,'/готов Воин');

        expect(results).toEqual([{
            'chatId': '1', 'options': undefined, 'text': 'Ожидаем противника'
        }]);
    });

    it('Второй игрок сообщил что готов играть за Мага', () => {
        doAction(2, '/готов Маг');
        expect(results).toEqual([{
            'chatId': '1',
            'options': {
                'reply_markup': {
                    'keyboard': [[{'text': '/act рассечь'},
                        {'text': '/act ударить мечем'}, {'text': '/act ударить щитом'}]],
                    'one_time_keyboard': true
                }
            },
            'text': 'Противник найден\nВоин vs Маг'
        }, {
            'chatId': '2',
            'options': {
                'reply_markup': {
                    'keyboard': [[{'text': '/act огненный шар'}, {'text': '/act ледяная стрела'}]],
                    'one_time_keyboard': true
                }
            },
            'text': 'Противник найден\nВоин vs Маг'
        }]);
    });

    it('Несколько раундов ударов', () => {
        doAction(1, '/act ударить мечем');
        doAction(2, '/act огненный шар');
        doAction(1, '/act ударить мечем');
        doAction(2, '/act огненный шар');
        doAction(1, '/act ударить мечем');
        doAction(2, '/act огненный шар');
        doAction(1, '/act ударить мечем');
        doAction(2, '/act огненный шар');
        doAction(1, '/act ударить мечем');
        doAction(2, '/act огненный шар');
        doAction(1, '/act ударить мечем');
        doAction(2, '/act огненный шар');
    });

    it('Бой завершается успешно', () => {
        doAction(1, '/act ударить мечем');
        doAction(2, '/act огненный шар');

        expect(results).toEqual([
            {'chatId': '1', 'options': undefined, 'text': 'Вы собрались ударить ударить мечем'},
            {'chatId': '1', 'options': undefined, 'text': 'ожидаем противника'},
            {'chatId': '2', 'options': undefined, 'text': 'Вы собрались ударить огненный шар'},
            {'chatId': '1', 'options': undefined, 'text': 'Удар мечем наносит 11 урона' +
                '\nОгненный шар наносит 8 урона' +
                '\nОгненный шар накладывает эффек Горение' +
                '\nГорение наносит 4 урона'
            },
            {'chatId': '1', 'options': undefined, 'text': 'Ваш противник побежден, игра окончена'},
            {'chatId': '2', 'options': undefined, 'text': 'Удар мечем наносит 11 урона' +
                '\nОгненный шар наносит 8 урона' +
                '\nОгненный шар накладывает эффек Горение' +
                '\nГорение наносит 4 урона'
            },
            {'chatId': '2', 'options': undefined, 'text': 'Вы побеждены, игра окончена'}
        ]);
    });
});
