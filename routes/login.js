const express = require('express');
const router = express.Router();

const passport = require('passport');
const loginController = require('./controllers/login.controllers');

router.get('/', loginController.showLoginPage);
router.post('/', passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/',
}));
router.post('/callback', passport.authenticate('local',
  { failureRedirect: '/login' }),
  loginController.callbackLoginSuccess);

module.exports = router;
