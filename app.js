const express = require('express');
app = express();
bodyParser = require('body-parser');
routes = require('./routes/posts');
path = require('path')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

// routes settings
app.use('/', routes)




module.exports = app;