import {Db, MongoClient} from 'mongodb';
const url = "mongodb://localhost:57017/battlesDB";

export let DB: Db;

MongoClient.connect(url, {
    auth: {
        user: 'user',
        password: 'user'
    }
})
    .catch(err => {throw err;})
    .then(db => {
        DB = db.db("battlesDB");
    });