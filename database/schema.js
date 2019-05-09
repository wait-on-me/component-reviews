const mongoose = require('mongoose');

//Restaurant model

const restaurantSchema = new mongoose.Schema({
  restaurantId: Number,
  rating: {
    Overall: Number,
    Food: Number,
    Service: Number,
    Ambience: Number,
    Value: Number,
  },
  reviews: [{
    first_name: String,
    last_name: String,
    username: String,
    privacy: Boolean,
    vip_status: Boolean,
    reviews_written: Number,
    date: String,
    location: String,
    review_entry: String,
    noise_level: String,
    would_recommend: Boolean,
    helpful: Boolean,
    recommendations: {
      good_for_groups: Boolean,
    },
    individual_rating: {
      Overall: Number,
      Food: Number,
      Service: Number,
      Ambience: Number,
      Value: Number,
    }

  }]

});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;