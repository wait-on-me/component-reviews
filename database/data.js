const mongoose = require('mongoose');
const Restaurant = require('./schema.js');
const db = require('./index.js');

const faker = require('faker');

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
}

const boolean = [true, false];
const noiseLevel = ['Quiet', 'Moderate', 'Energetic'];

const newReview = () => {
  const reviewsArray = [];
  for (var i = 1; i < getRandom(5, 75); i++) {
    const reviews = {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      username: faker.internet.userName(),
      privacy: boolean[getRandomInt(2)],
      vip_status: boolean[getRandomInt(2)],
      reviews_written: getRandomInt(15),
      date: faker.date.between('2018-05-08', '2019-05-08'),
      location: `${faker.address.city()}, ${faker.address.state()}`,
      review_entry: faker.lorem.sentences(getRandom(1, 7)),
      noise_level: noiseLevel[getRandomInt(3)],
      would_recommend: boolean[getRandomInt(2)],
      helpful: boolean[getRandomInt(2)],
      recommendations: {
        good_for_groups: boolean[getRandomInt(2)],
      },
      individual_rating: {
        Overall: faker.random.number({ min: 1, max: 5 }),
        Food: faker.random.number({ min: 1, max: 5 }),
        Service: faker.random.number({ min: 1, max: 5 }),
        Ambience: faker.random.number({ min: 1, max: 5 }),
        Value: faker.random.number({ min: 1, max: 5 }),
      },
    };
    reviewsArray.push(reviews);
  }
  return reviewsArray;
  // console.log(reviewsArray);
}

const newRestaurant = (i) => {
  const restaurantId = i;
  const reviews = newReview();
  // console.log(reviews)
  const rating = {}

  rating.Overall = parseFloat((reviews.reduce((acc, value) => acc += value.individual_rating.Overall, 0) / reviews.length).toFixed(1));

  rating.Food = parseFloat((reviews.reduce((acc, value) => acc += value.individual_rating.Food, 0) / reviews.length).toFixed(1));

  rating.Service = parseFloat((reviews.reduce((acc, value) => acc += value.individual_rating.Service, 0) / reviews.length).toFixed(1));

  rating.Ambience = parseFloat((reviews.reduce((acc, value) => acc += value.individual_rating.Ambience, 0) / reviews.length).toFixed(1));

  rating.Value = parseFloat((reviews.reduce((acc, value) => acc += value.individual_rating.Value, 0) / reviews.length).toFixed(1));



  // console.log(rating);
  return {
    restaurantId,
    reviews,
    rating,
  };
}

// console.log(newRestaurant(2));
const generateData = (numberOfEntries) => {
  let restaurantArr = [];

  for (let i = 1; i < numberOfEntries; i++) {
    restaurantArr.push(newRestaurant(i));
  }
  return restaurantArr;

}


const seedDB = (data) => {
  Restaurant.deleteMany({}, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('Database cleared');
      Restaurant.insertMany(data, (err) => {
        if (err) {
          console.log(err);
          console.log('seeding failed')

        } else {
          console.log('successfully saved data')
        }
      });
    }
  });
}


const data = generateData(100);
// console.log(data);
seedDB(data);