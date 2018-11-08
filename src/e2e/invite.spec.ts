import {doAction, Session} from '../index';
import * as crypto from 'crypto';
import {Player} from '../game/units/player';

xdescribe('bot', () => {

    const results: string[] = [];
    const sessions: Session[] = [
        {
            player: new Player('1'),
            token: '123',
            played: 0
        },
        {
            player: new Player('2'),
            token: '321',
            played: 0
        }
    ];

    beforeAll(() => {
        spyOn(console, 'log').and.callFake(msg => results.push(msg));
        spyOn(Math, 'random').and.returnValue(0.5);
    });

    beforeEach(() => {
        results.length = 0;

        spyOn(sessions[0], 'send').and.callFake((action, payload) => {
            results.push(`${action} ${payload}`);
        });
        spyOn(sessions[1], 'send').and.callFake((action, payload) => {
            results.push(`${action} ${payload}`);
        });
    });

    it('Первый игрок запрашивает приватный бой', () => {
        spyOn(crypto, 'randomBytes').and.returnValue('testhash');
        doAction(sessions[0], 'invite');

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
        doAction(sessions[1], '/start duel10');

        expect(results).toEqual([{
            'chatId': '2',
            'options': undefined,
            'text': 'Ваша дуэль уже закончилась или была отменена, бросте новый вызов /вызов'
        }]);
    });

    it('Второй игрок перешел по ссылке', () => {
        doAction(sessions[1], '/start testhash');

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
        doAction(sessions[1], '/start duel0');

        expect(results).toEqual([{
            'chatId': '2',
            'options': undefined,
            'text': 'Ваша дуэль уже закончилась или была отменена, бросте новый вызов /вызов'
        }]);
    });

    it('Первый игрок сообщил что готов играть за Воина', () => {
        doAction(sessions[0],'/готов Воин');

        expect(results).toEqual([{
            'chatId': '1', 'options': undefined, 'text': 'Ожидаем противника'
        }]);
    });

    it('Второй игрок сообщил что готов играть за Мага', () => {
        doAction(sessions[1], '/готов Маг');
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
        doAction(sessions[0], '/act ударить мечем');
        doAction(sessions[1], '/act огненный шар');
        doAction(sessions[0], '/act ударить мечем');
        doAction(sessions[1], '/act огненный шар');
        doAction(sessions[0], '/act ударить мечем');
        doAction(sessions[1], '/act огненный шар');
        doAction(sessions[0], '/act ударить мечем');
        doAction(sessions[1], '/act огненный шар');
        doAction(sessions[0], '/act ударить мечем');
        doAction(sessions[1], '/act огненный шар');
        doAction(sessions[0], '/act ударить мечем');
        doAction(sessions[1], '/act огненный шар');
    });

    it('Бой завершается успешно', () => {
        doAction(sessions[0], '/act ударить мечем');
        doAction(sessions[1], '/act огненный шар');

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
