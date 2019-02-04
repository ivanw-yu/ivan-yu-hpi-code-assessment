const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const db = require('./config/db');
mongoose.connect(db.url, { useNewUrlParser: true});

const port = process.env.PORT || 4000;
const auth = require('./routes/auth');
const users = require('./routes/users');
const products = require('./routes/products');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/products', products);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log('listening to port')
});
