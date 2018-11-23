import {Db, MongoClient} from 'mongodb';

export let DB: Db;
let url: string;

export function connectToDb() {
    url = "mongodb://" + process.env.DB_HOST + "/battlesDB";

    return tryToConnect();
}

function tryToConnect() {
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