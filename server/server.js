const express = require('express');
const app = express()
const port = 3001;

app.listen(port, () => console.log(`Listening to app on port ${port}!`))
app.use(express.static(`public`))

app.get('/', function (req, res) {
  res.send('hello world');
});