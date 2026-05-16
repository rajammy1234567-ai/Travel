const express =  require('express');
const authRouter = express.Router();


const {
  sendOtp ,
  verifyOtp
 } = require('../controller/authController');

 authRouter.post('/send-otp' , sendOtp);
 authRouter.post('/verify-otp' , verifyOtp);


 module.exports = authRouter;
<<<<<<< HEAD
=======
 
>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3
