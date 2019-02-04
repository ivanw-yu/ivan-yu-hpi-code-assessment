const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = mongoose.Types.ObjectId;

const jwt = require('jsonwebtoken');

const secret = require('../config/secret'),
      db = require('../config/db');

const userSchema = new Schema({
  name: {
    type: String,
    required:true
  },
  token: {type: String}
});

// before saving the user, create the token for the user,
// which will be used to authenticate the user.
userSchema.pre('save', function(next){
  const user = this,
        {_id} = user;

  user.token = jwt.sign({_id}, secret);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
