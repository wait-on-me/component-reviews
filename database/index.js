const mongoose = require('mongoose');

//connect to mongodb 
mongoose.connect('mongodb://localhost/waitonme', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database is now connected')
});

module.exports = { db }