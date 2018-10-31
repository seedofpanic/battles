import {doAction} from '../index';
import {Player} from '../game/player';
import objectContaining = jasmine.objectContaining;
import arrayContaining = jasmine.arrayContaining;
import anything = jasmine.anything;

xdescribe('bot', () => {

    const player1 = new Player('1');
    const player2 = new Player('2');

    const results: any[] = [];

    beforeAll(() => {
        spyOn(console, 'log').and.callFake(msg => results.push(msg));
        spyOn(Math, 'random').and.returnValue(0.5);
        spyOn(player1, 'send').and.callFake((type, payload) => {
            results.push({[type]: payload});
        });
        spyOn(player2, 'send').and.callFake((type, payload) => {
            results.push({[type]: payload});
        });
    });

    beforeEach(() => {
        results.length = 0;
    });

    it('Первый игрок сообщил что готов', () => {
        doAction(player1, {type: 'start', payload: {}});

        expect(results).toEqual([
            {set_in_battle: true},
            {set_my_id: '1'},
            {
                'select_character': arrayContaining([
                    objectContaining({'id': 'barbarian', skills: jasmine.anything()}),
                    objectContaining({'id': 'warrior', skills: jasmine.anything()}),
                    objectContaining({'id': 'mage', skills: jasmine.anything()}),
                    objectContaining({'id': 'vampire', skills: jasmine.anything()})
                ])
            }
        ]);
    });

    it('Первый игрок сообщил что готов играть за Воина', () => {
        doAction(player1, {type: 'select_character', payload: 'warrior'});

        expect(results).toEqual([{
            character_update: {
                data: {
                    id: 'warrior',
                    health: 100,
                    healthMax: 100,
                    name: 'Warrior'
                },
                id: '1'
            },
        },
            {note: 'Waiting for opponent to join'}
        ]);
    });

    it('Второй игрок сообщил что готов', () => {
        doAction(player2, {type: 'start', payload: {}});
        expect(results).toEqual([{"set_in_battle": true}, {
            "character_update": {
                "data": {
                    id: 'warrior',
                    "health": 100,
                    "healthMax": 100,
                    "name": "Warrior"
                }, "id": "1"
            }
        }, {"set_opponent_id": "1"}, {"set_opponent_id": "2"}, {"set_my_id": "2"}, {
            "select_character": arrayContaining([
                objectContaining({'id': 'barbarian', skills: jasmine.anything()}),
                objectContaining({'id': 'warrior', skills: jasmine.anything()}),
                objectContaining({'id': 'mage', skills: jasmine.anything()}),
                objectContaining({'id': 'vampire', skills: jasmine.anything()})
            ])
        }]);
    });

    it('Второй игрок сообщил что готов играть за Мага', () => {
        doAction(player2, {type: 'select_character', payload: 'mage'});
        expect(results).toEqual([{
            "character_update": {
                "data": {"health": 70, "healthMax": 70, "name": "Mage", id: 'mage'},
                "id": "2"
            }
        }, {
            "character_update": {
                "data": {"health": 70, "healthMax": 70, "name": "Mage", id: 'mage'},
                "id": "2"
            }
        }, {"note": "Opponent found: Warrior vs Mage"}, {
            "select_skill": [{
                "id": "bleeding_wound",
                "name": "Bleeding wound"
            }, {"id": "slash", "name": "Slash"}, {"id": "shield_strike", "name": "Shield strike"}]
        }, {"note": "Opponent found: Warrior vs Mage"}, {
            "select_skill": [{
                "id": "fire_ball",
                "name": "Fire ball"
            }, {"id": "frost_arrow", "name": "Frost arrow"}]
        }]);
    });

    it('Первый игрок выбирает рассечь', () => {
        doAction(player1, {type: 'select_skill', payload: 'bleeding_wound'});

        expect(results).toEqual([{"note": "You will use Bleeding wound skill"},
            {"note": "Waiting for opponent..."}]);
    });

    it('Второй игрок выбирает огненный шар', () => {
        doAction(player2, {type: 'select_skill', payload: 'fire_ball'});

        expect(results).toEqual([{"note": "You will use Fire ball skill"}, {
            "character_update": {
                "data": {
                    "health": 89.2,
                    "effects": anything()
                },
                "id": "1"
            }
        }, {
            "character_update": {
                "data": {
                    "health": 89.2,
                    "effects": anything()
                }, "id": "1"
            }
        }, {
            "note": 'Bleeding wound do 11 damage\n' +
                'Bleeding wound adds Bleeding effect\n' +
                'Fire ball do 8 damage\n' +
                'Fire ball adds Burning effect\n' +
                'Burning do 4 damage\n' +
                'Bleeding do 6 damage'
        }, {
            "select_skill": [{"id": "slash", "name": "Slash"}, {
                "id": "shield_strike",
                "name": "Shield strike"
            }]
        }, {
            "character_update": {
                "data": {
                    "health": 54.699999999999996,
                    "effects": anything()
                },
                "id": "2"
            }
        }, {
            "character_update": {
                "data": {
                    "health": 54.699999999999996,
                    "effects": anything()
                }, "id": "2"
            }
        }, {
            "note": 'Bleeding wound do 11 damage\n' +
                'Bleeding wound adds Bleeding effect\n' +
                'Fire ball do 8 damage\n' +
                'Fire ball adds Burning effect\n' +
                'Burning do 4 damage\n' +
                'Bleeding do 6 damage'
        }, {"select_skill": [{"id": "fire_ball", "name": "Fire ball"}, {"id": "frost_arrow", "name": "Frost arrow"}]}]);
    });

    it('Второй игрок выбирает огненный шар еще раз', () => {
        doAction(player2, {type: 'select_skill', payload: 'fire_ball'});

        expect(results).toEqual([{"note": "You will use Fire ball skill"},
            {"note": "Waiting for opponent..."}]);
    });

    it('Первый игрок выбирает ударить щитом', () => {
        doAction(player1, {type: 'select_skill', payload: 'shield_strike'});

        expect(results).toEqual([{"note": "You will use Shield strike skill"}, {
            "character_update": {
                "data": {
                    "health": 74.80000000000001,
                    "effects": anything()
                },
                "id": "1"
            }
        }, {
            "character_update": {
                "data": {
                    "health": 74.80000000000001,
                    "effects": anything()
                }, "id": "1"
            }
        }, {
            "note": "Shield strike do 9 damage\n" +
                'Shield strike adds Stun effect\n' +
                'Fire ball do 8 damage\n' +
                'Fire ball adds Burning effect\n' +
                'Burning do 4 damage\n' +
                'Burning do 4 damage'
        }, {
            "select_skill": [{"id": "bleeding_wound", "name": "Bleeding wound"}, {
                "id": "slash",
                "name": "Slash"
            }]
        }, {
            "character_update": {
                "data": {
                    "health": 45.699999999999996,
                    "effects": anything()
                },
                "id": "2"
            }
        }, {
            "character_update": {
                "data": {
                    "health": 45.699999999999996,
                    "effects": anything()
                }, "id": "2"
            }
        }, {
            "note": 'Shield strike do 9 damage\n' +
                'Shield strike adds Stun effect\n' +
                'Fire ball do 8 damage\n' +
                'Fire ball adds Burning effect\n' +
                'Burning do 4 damage\n' +
                'Burning do 4 damage'
        }, {"select_skill": {}}]);
    });

    it('Второй игрок выбирает ледяную стрелу', () => {
        doAction(player2, {type: 'select_skill', payload: 'frost_arrow'});

        expect(results).toEqual([{"error": "Skill already selected"}]);
    });

    it('Первый игрок выбирает ударить щитом, но это действие не доступно', () => {
        doAction(player1, {type: 'select_skill', payload: 'shield_strike'});

        expect(results).toEqual([{"error": "Skill shield_strike is not available now"}]);
    });

    it('Первый игрок выбирает ударить мечем второй раз', () => {
        doAction(player1, {type: 'select_skill', payload: 'slash'});

        expect(results).toEqual([{"note": "You will use Slash skill"}, {
            "character_update": {
                "data": {
                    "health": 71.20000000000002,
                    "effects": anything()
                },
                "id": "1"
            }
        }, {
            "character_update": {
                "data": {
                    "health": 71.20000000000002,
                    "effects": anything()
                }, "id": "1"
            }
        }, {
            "note": "Slash do 11 damage\n" +
                'Burning do 4 damage'
        }, {
            "select_skill": [{"id": "bleeding_wound", "name": "Bleeding wound"}, {
                "id": "slash",
                "name": "Slash"
            }]
        }, {
            "character_update": {
                "data": {
                    "health": 35.5,
                    "effects": anything()
                }, "id": "2"
            }
        }, {
            "character_update": {
                "data": {
                    "health": 35.5,
                    "effects": anything()
                },
                "id": "2"
            }
        }, {
            "note": 'Slash do 11 damage\n' +
                'Burning do 4 damage'
        }, {"select_skill": [{"id": "fire_ball", "name": "Fire ball"}, {"id": "frost_arrow", "name": "Frost arrow"}]}]);
    });
});
