const mongoose = require('mongoose');


const DB = 'mongodb://localhost:27017/habit-tracker';

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection successful!');
    })
    .catch((err) => {
        console.log('No connection', err);
    });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;