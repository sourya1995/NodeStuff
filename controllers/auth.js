const User = require('../models/User');
exports.getLogin = (req, res, next) => {
    // const isLoggedIn = req.get('Cookie').split(';')[1].trim().split('=')[1] === 'true';
        res.render('auth/login', {
          path: '/login',
          pageTitle: 'Login',
          isAuthenticated: false
        });
      
  };

exports.postLogin = (req, res, next) => {
    
    User.findById('63772ececbaf935ae1a725a3')
    .then(user => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save((err) => {
            res.redirect('/');
        });
    })
    .catch(err => console.log(err));

    
}

exports.postLogout = (req, res, next) => {
    
    req.session.destroy((err) => {
        res.redirect('/');
    });
    
}


