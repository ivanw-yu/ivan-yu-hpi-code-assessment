const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const db = require('./config/db');
mongoose.connect(db.url, { useNewUrlParser: true});

const port = process.env.PORT || 3000;
const auth = require('./routes/auth');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/auth', auth);

app.listen(port, () => {
  console.log('listening to port')
});
