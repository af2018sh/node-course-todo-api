const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');
    //     db.collection('users').insertOne({
    //         name: 'afrooz',
    //         age: 26,
    //         location: 'Melbourn'
    //     }, (err, res) => {
    //         if (err) {
    //             return console.log('Unable to insert users', err);
    //         }
    //         console.log('users inserted');
    //     });
    //     client.close();
    db.collection('users').find({ location: 'Melbourn' }).toArray().then((docs) => {
        console.log('users');
        console.log(JSON.stringify(docs, undefined, 2));
    })
});