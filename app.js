const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

//const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const user = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('63772ececbaf935ae1a725a3')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
  
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
mongoose.connect('mongodb+srv://sourya:tCCF!wSTt9-rY7H@cluster0.gf2zckt.mongodb.net/shop?retryWrites=true&w=majority')
.then(result => {
  User.findOne().then(user =>{
    if(!user){
      const user = new User({
        name: 'Sourya',
        email: 'Sourya@test.com',
        cart: {
          items: []
        }
      })
      user.save();
    }
  })
  
  app.listen(3000);
})
.catch(err => console.log(err));
