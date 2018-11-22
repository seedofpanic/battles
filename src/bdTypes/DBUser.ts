import {ObjectID} from 'bson';
import {Player} from '../game/units/player';
import {DB} from '../db';

export interface DBUser {
    _id?: ObjectID;
    id?: string;
    played: number;
}

export function getUserById(_id: string) {
    return getUser({_id: new ObjectID(_id)});
}

export function getUser(filter: Partial<DBUser>): Promise<DBUser> {
    return DB.collection<DBUser>('users')
        .findOne(filter);
}

export function createUser(player: Player): Promise<DBUser> {
    const user = player.getUserData();

    return DB.collection<Partial<DBUser>>('users')
        .insertOne(user)
        .then(() => user);
}

export function updateUser(_id: string, user: DBUser): Promise<DBUser> {
    return DB.collection('users')
        .updateOne({_id: new ObjectID(_id)}, {$set: user})
        .then(() => {
            return Promise.resolve(user);
        });
}