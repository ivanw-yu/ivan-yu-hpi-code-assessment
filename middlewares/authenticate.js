const User = require('../models/user');

module.exports = async (req,res,next) => {
  try{
    const token = req.header('token');
    const user = await User.findOne({token});
    if(user){
      console.log('user1',user)
      req.user = user;
      req.token = token;
      return next();
    }
    res.status(401).send({success: false, message: "401 Unauthorized"});
  }catch(e){
    res.status(401).send({success: false, message: "401 Unauthorized"});
  }
}
