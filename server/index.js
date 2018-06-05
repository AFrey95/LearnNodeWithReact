const express = require('express'); //import express library
const app = express(); //create app object from express

app.get('/', (req, res) => { //listen for get requests on root address
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000; // get port from Heroku via env OR use 5000
app.listen(PORT);
