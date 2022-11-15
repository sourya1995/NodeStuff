

const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);



app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000);

