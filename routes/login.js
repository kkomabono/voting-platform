const express = require('express');
const router = express.Router();

const passport = require('passport');
const loginController = require('./controllers/login.controllers');

router.get('/', loginController.showLoginPage);
router.post('/', passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/',
  failureFlash: {
    type: 'error',
    message: 'Check Email or Password. (CapsLock?)'
  },
}));
router.get('/callback', loginController.showCallbackUrlLoginPage)
router.post('/callback', passport.authenticate('local',
  { failureRedirect: '/login/callback',
    failureFlash: {
      type: 'error',
      message: 'Check Email or Password. (CapsLock?)'
    },
  }),
  loginController.callbackLoginSuccess);

module.exports = router;
