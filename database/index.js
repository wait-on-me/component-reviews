const mongoose = require('mongoose');
const Restaurant = require('./schema.js');
//connect to mongodb 
mongoose.connect('mongodb://localhost/waitonme', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database is now connected')
});



const findAll = (callback) => {
  Restaurant.find((err, data) => {
    if (err) {
      callback(err, null);
    }
    callback(null, data);
  });
}


const findOne = (id, callback) => {
  Restaurant.findOne({ restaurantId: id }, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

module.exports = {
  db,
  findAll,
  findOne
}