const User = require('../models/user');
const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');

router.get('/', authenticate, async (req, res)=>{
  try{
    const users = await User.find();
    res.send({success: true, users});
  }catch(e){
    res.status(401).send({success: false});
  }
});

module.exports = router;
