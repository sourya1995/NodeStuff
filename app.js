

const http = require('http');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');

const express = require('express');
const app = express();
//app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'ejs');
app.set('views', 'views');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
const db = require('./util/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);



app.use(errorController.get404);

app.listen(3000);

