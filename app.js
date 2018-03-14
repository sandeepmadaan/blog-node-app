var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var dotenv = require('dotenv');
dotenv.load();
// var index = require('./routes/index');
// var users = require('./routes/users');

var app = express();
hbs.registerPartials(__dirname + 'views');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function(req, res, next) {
//   res.render('index', { title: 'Node' });
// });
// app.get('/profile',function(req, res, next){
//   var profile_id=req.query.id;
//   res.render('profile',{id:profile_id});
// });

app.use('/', require('./routes'));

module.exports = app;