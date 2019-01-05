const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) { return console.log('Unable to connect to mongodb server'); }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');
    // db.collection('users').deleteMany({ name: 'Ehsan' }).then((result) => {
    //     console.log(result);
    // });
    db.collection('users').findOneAndDelete({ _id: new_id }).then((result) => {
        console.log(result);
    })
});