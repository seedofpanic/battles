import {doAction, Session} from '../index';
import {Player} from '../game/units/player';
import objectContaining = jasmine.objectContaining;
import arrayContaining = jasmine.arrayContaining;

describe('pvp Warrior vs Mage', () => {

    const results: any[] = [];
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
        spyOn(Math, 'random').and.returnValue(0.51);
        spyOn(sessions[0].player, 'send').and.callFake((type, payload) => {
            results.push({[type]: payload});
        });
        spyOn(sessions[1].player, 'send').and.callFake((type, payload) => {
            results.push({[type]: payload});
        });
    });

    beforeEach(() => {
        results.length = 0;
    });

    it('Первый игрок сообщил что готов', () => {
        doAction(sessions[0], {type: 'start', payload: {}});

        expect(results).toEqual([
            {set_in_battle: true},
            {set_teams: {myTeam: "team1", opponentTeam: "team2"}},
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
        doAction(sessions[0], {type: 'select_character', payload: 'warrior'});

        expect(results).toEqual([{
            character_update: {
                data: {
                    id: 'warrior',
                    health: 100,
                    healthMax: 100,
                    name: 'Warrior',
                    effects: []
                },
                id: '1',
                team: 'team1'
            },
        },
            {note: 'Waiting for opponent to join'}
        ]);
    });

    it('Второй игрок сообщил что готов', () => {
        doAction(sessions[1], {type: 'start', payload: {}});
        expect(results).toEqual([
            {"set_in_battle": true},
            {set_teams: {myTeam: "team2", opponentTeam: "team1"}},
            {
                character_update: {
                    data: {
                        id: 'warrior',
                        health: 100,
                        healthMax: 100,
                        name: "Warrior",
                        effects: []
                    },
                    id: "1",
                    team: 'team1'
                }
            },
            {
                "select_character": arrayContaining([
                    objectContaining({'id': 'barbarian', skills: jasmine.anything()}),
                    objectContaining({'id': 'warrior', skills: jasmine.anything()}),
                    objectContaining({'id': 'mage', skills: jasmine.anything()}),
                    objectContaining({'id': 'vampire', skills: jasmine.anything()})
                ])
            }]);
    });

    it('Второй игрок сообщил что готов играть за Мага', () => {
        doAction(sessions[1], {type: 'select_character', payload: 'mage'});
        expect(results).toEqual([{
            character_update: {
                "data": {"health": 70, "healthMax": 70, "name": "Mage", id: 'mage', effects: []},
                "id": "2",
                team: 'team2'
            }
        }, {
            character_update: {
                "data": {"health": 70, "healthMax": 70, "name": "Mage", id: 'mage', effects: []},
                "id": "2",
                team: 'team2'
            }
        }, {"note": "Opponent found: Warrior vs Mage"}, {
            select_skill: jasmine.arrayContaining([{
                "id": "piercing_strike",
                "name": "Piercing strike"
            }])
        }, {"note": "Opponent found: Warrior vs Mage"}, {
            select_skill: jasmine.arrayContaining([{
                "id": "fireball",
                "name": "Fireball"
            }, {"id": "fireball", "name": "Fireball"}])
        }]);
    });

    it('Первый игрок выбирает Piercing strike', () => {
        doAction(sessions[0], {type: 'select_skill', payload: 'piercing_strike'});

        expect(results).toEqual([{"note": "You will use Piercing strike skill"},
            {"note": "Waiting for opponent..."}]);
    });

    it('Второй игрок выбирает огненный шар', () => {
        doAction(sessions[1], {type: 'select_skill', payload: 'fireball'});

        expect(results).toEqual([{"note": "You will use Fireball skill"}, {
            "character_update": {
                "data": {
                    "health": 94,
                    "healthMax": 100,
                    "id": "warrior",
                    "name": "Warrior",
                    "effects": []
                },
                "id": "1",
                team: 'team1'
            }
        }, {
            "character_update": {
                "data": {
                    "health": 94,
                    "healthMax": 100,
                    "id": "warrior",
                    "name": "Warrior",
                    "effects": []
                }, "id": "1", team: 'team1'
            }
        }, {
            "note": 'Piercing strike do 5 damage\n' +
                'Fireball do 6 damage'
        }, {
            "select_skill": jasmine.arrayContaining([{"id": "piercing_strike", "name": "Piercing strike"}])
        }, {
            "character_update": {
                "data": {
                    "health": 65,
                    "healthMax": 70,
                    "id": "mage",
                    "name": "Mage",
                    "effects": []
                },
                id: "2",
                team: 'team2'
            }
        }, {
            "character_update": {
                "data": {
                    "health": 65,
                    "healthMax": 70,
                    "id": "mage",
                    "name": "Mage",
                    "effects": []
                },
                id: "2",
                team: 'team2'
            }
        }, {
            "note": 'Piercing strike do 5 damage\n' +
                'Fireball do 6 damage'
        }, {"select_skill": jasmine.arrayContaining([{"id": "fireball", "name": "Fireball"}])}]);
    });

    it('Второй игрок выбирает огненный шар еще раз', () => {
        doAction(sessions[1], {type: 'select_skill', payload: 'fireball'});

        expect(results).toEqual([{"note": "You will use Fireball skill"},
            {"note": "Waiting for opponent..."}]);
    });

    it('Первый игрок выбирает ударить щитом', () => {
        doAction(sessions[0], {type: 'select_skill', payload: 'shield_strike'});

        expect(results).toEqual([{"note": "You will use Shield strike skill"}, {
            character_update: {
                data: {
                    health: 88,
                    healthMax: 100,
                    id: 'warrior',
                    name: 'Warrior',
                    effects: []
                },
                id: "1",
                team: 'team1'
            }
        }, {
            character_update: {
                data: {
                    health: 88,
                    healthMax: 100,
                    id: 'warrior',
                    name: 'Warrior',
                    effects: []
                },
                id: "1",
                team: 'team1'
            }
        }, {
            "note": 'Shield strike do 11 damage\n' +
                'Shield strike adds Stun effect\n' +
                'Fireball do 6 damage'
        }, {
            "select_skill": jasmine.arrayContaining([
                    {"id": "piercing_strike", "name": "Piercing strike"}
                ])
        }, {
            "character_update": {
                "data": {
                    "health": 54.5,
                    healthMax: 70,
                    id: 'mage',
                    name: 'Mage',
                    "effects": [
                        {
                            id: 'stun',
                            name: 'Stun',
                            ticks: 1
                        }
                    ]
                },
                "id": "2",
                team: 'team2'
            }
        }, {
            "character_update": {
                "data": {
                    "health": 54.5,
                    healthMax: 70,
                    id: 'mage',
                    name: 'Mage',
                    "effects": [
                        {
                            id: 'stun',
                            name: 'Stun',
                            ticks: 1
                        }
                    ]
                },
                "id": "2",
                team: 'team2'
            }
        }, {
            "note": 'Shield strike do 11 damage\n' +
                'Shield strike adds Stun effect\n' +
                'Fireball do 6 damage'
        }, {"select_skill": []}]);
    });

    it('Второй игрок выбирает ледяную стрелу', () => {
        doAction(sessions[1], {type: 'select_skill', payload: 'frost_arrow'});

        expect(results).toEqual([{"error": "Skill already selected"}]);
    });

    it('Первый игрок выбирает ударить щитом, но это действие не доступно', () => {
        doAction(sessions[0], {type: 'select_skill', payload: 'shield_strike'});

        expect(results).toEqual([{"error": "Skill shield_strike is not available now"}]);
    });

    it('Первый игрок выбирает ударить мечем второй раз', () => {
        doAction(sessions[0], {type: 'select_skill', payload: 'piercing_strike'});

        expect(results).toEqual([{"note": "You will use Piercing strike skill"}, {
            "character_update": {
                "data": {
                    "health": 88,
                    healthMax: 100,
                    id: 'warrior',
                    name: 'Warrior',
                    "effects": []
                },
                "id": "1",
                team: 'team1'
            }
        }, {
            "character_update": {
                "data": {
                    "health": 88,
                    healthMax: 100,
                    id: 'warrior',
                    name: 'Warrior',
                    "effects": []
                },
                "id": "1",
                team: 'team1'
            }
        }, {
            "note": "Piercing strike do 5 damage"
        }, {
            "select_skill": jasmine.arrayContaining([{"id": "piercing_strike", "name": "Piercing strike"}])
        }, {
            "character_update": {
                "data": {
                    "health": 49.5,
                    healthMax: 70,
                    id: 'mage',
                    name: 'Mage',
                    "effects": []
                }, "id": "2",
                team: 'team2'
            }
        }, {
            "character_update": {
                "data": {
                    "health": 49.5,
                    healthMax: 70,
                    id: 'mage',
                    name: 'Mage',
                    "effects": []
                },
                "id": "2",
                team: 'team2'
            }
        }, {
            "note": 'Piercing strike do 5 damage'
        }, {"select_skill": jasmine.arrayContaining([
                {id: 'fireball', name: 'Fireball'}
            ])}]);
    });
});
