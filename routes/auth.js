const router = require('express').Router(),
      User = require('../models/user');

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

module.exports = router;
