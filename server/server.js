const express = require('express');
const app = express()
const port = 3001;
const { findOne, findAll } = require('../database/index.js')


app.listen(port, () => console.log(`Listening to app on port ${port}!`))

app.use(express.static(`public`))


app.get('/restaurants', (req, res) => {
  findAll((err, data) => {
    if (err) {
      res.sendStatus(404);
      throw (err);
    }
    res.send(data);
  });
});


app.get('/restaurants/:restaurantId', (req, res) => {
  const id = req.params.restaurantId;
  // console.log(req.params)
  findOne(id, (err, data) => {
    if (err) {
      res.send('error');
      res.status(404);
    } else {
      res.send(data);
    }
  });
});

