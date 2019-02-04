const User = require('../models/user');

module.exports = async (req,res,next) => {
  try{
    const token = req.header('token');
    const user = await User.findOne({token});
    if(user){
      req.user = user;
      req.token = token;
      next()
    }
    res.status(401).send({success: false, message: "401 Unauthorized"});
  }catch(e){
    res.status(401).send({success: false, message: "401 Unauthorized"});
  }
}
