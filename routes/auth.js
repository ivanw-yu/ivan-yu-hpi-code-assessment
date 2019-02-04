const router = require('express').Router(),
      User = require('../models/user');
const authenticate = require('../middlewares/authenticate');

router.post('/login', async (req, res) => {
  try{
    console.log(req.body);
    const user = new User({name: req.body.name});
    console.log("here");
    const newUser = await user.save();
    res.send({success: true, user: newUser});
  }catch(e){
    res.status(400).send({success: false, e});
  }
});

// for redux state management purposes.
// when the application is visited through the browser address
// bar, this will prevent the redux store from reseting.
router.get('/verify', authenticate, (req, res) => {
  // if it passes the authenticate middleware, this means
  // that the user is logged in.
  res.send({success: true, user: req.user});
});

module.exports = router;
