const mongoose = require('mongoose');
const Restaurant = require('./schema');

//connect to mongodb 
mongoose.connect('mongodb://localhost/waitonme', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database is now connected')
});


