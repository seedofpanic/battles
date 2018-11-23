import {Db, MongoClient} from 'mongodb';
const url = "mongodb://" + process.env.DB_HOST + "/battlesDB";

export let DB: Db;

export function connectToDb() {
    return MongoClient.connect(url, {
        auth: {
            user: 'user',
            password: 'user'
        }
    })
        .then(db => {
            DB = db.db("battlesDB");
        })
        .catch(err => {
            console.error(err);

            return new Promise(resolve => {
                setTimeout(() => {
                    connectToDb()
                        .then(resolve);
                }, 5000);
            });
        });
}