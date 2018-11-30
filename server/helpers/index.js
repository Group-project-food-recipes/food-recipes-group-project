const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'food-recipe';
const client = new MongoClient(url);
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

function encrypt(password){
    return bcrypt.hashSync(password, salt)
}

function compare(password, passHash){
    return bcrypt.compareSync(password, passHash); 
}

function MongoConnect(callback){
    client.connect(function(err) {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        callback(null,client)
    });
}
module.exports = {MongoConnect, encrypt, compare}