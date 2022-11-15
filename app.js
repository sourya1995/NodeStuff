

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);



app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);

