const express = require('express');
const models = require('../models');

const router = express.Router();

module.exports = function(passport) {

router.get('/signup', function(request, response){
  response.render('signup');
});

router.post('/signup', function(req, res) {
    // validation step
    if (req.body.password !== req.body.passwordRepeat) {
      return res.render('signup', {error: "Passwords don't match."});
    }

      var u = new models.User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        fname: req.body.fname,
        lname: req.body.lname,
        matchedUser: [],
        profile: {
          interests: [],
        },
        whenToMatch: null,
      });
      u.save(function(err, user) {
        if (err) {
          console.log(err);
          res.status(500).redirect('/signup');
          return;
        }
        res.redirect('/login');
      });

  });




router.get('/login', (request, response) => {
  response.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login'
}));

router.get('/landing', (req, res) => {
  res.render('landing')
})

return router;

};
