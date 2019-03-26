import {DB} from '../db';
import {DBUser} from './DBUser';
import {ObjectID} from 'bson';
import {UpdateWriteOpResult} from 'mongodb';

interface DBStats {
    _id?: ObjectID;
    id: 'winDuelRates';
    stats: WinDuelRatesStats;
}

export interface WinDuelRatesStats {
    [name: string]:
        { [name: string]: number };
}

export function getWinDuelRates(): Promise<WinDuelRatesStats> {
    return DB.collection<DBStats>('stats')
        .findOne({id: 'winDuelRates'})
        .then(result => {
            if (result) {
                return Promise.resolve(result.stats);
            }

            return Promise.reject('');
        })
        .catch(() => {
            DB.collection<DBStats>('stats')
                .insertOne({
                    id: 'winDuelRates',
                    stats: {}
                });

            return getWinDuelRates();
        });
}

export function saveWinDuelRates(winDuelRates: WinDuelRatesStats): Promise<UpdateWriteOpResult> {
    return DB.collection<DBUser>('stats')
        .updateOne({id: 'winDuelRates'}, {$set: {stats: winDuelRates}});
}