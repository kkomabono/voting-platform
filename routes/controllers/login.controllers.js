exports.showLoginPage = (req, res, next) => {
  try {
    res.render('login');
  } catch (error) {
    next(error);
  }
};

exports.callbackLoginSuccess = (req, res, ) => {
  return res.redirect(`${req.session.callbackUrl}`);
};
