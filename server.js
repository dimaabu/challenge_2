const express = require('express');
const fs = require('fs')
const port =4321
const app = express();
app.listen(4321, () => console.log('listening at 3000'));
app.use (express.static('client'));


app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })




