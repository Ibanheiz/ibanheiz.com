var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var uuid = require('node-uuid');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var compress = require('compression');
var multipart = require('connect-multiparty');
var helmet = require('helmet');
var mongoose = require('mongoose');
var passport = require('passport');
var authenticate = require('./config/passport/authenticate');
var initPassport = require('./config/passport/init')(passport, mongoose);
var partials = require('./modules/expose/partials')(express);
var expose = require('./modules/expose/index')(express);
var routes = require('./modules/main/routes')(express);
var api = {};
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(compress());
app.use(express.static(path.join(__dirname, '../front')));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({ secret: uuid.v1(), resave: true, saveUninitialized: true, cookie: {maxAge: 1200000}}));
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());
app.use(helmet.xframe());
app.use(helmet.xssFilter());
app.use(helmet.nosniff());
app.disabled('x-powered-by');
app.use(multipart({uploadDir: '/back'}));
app.set('views', path.join(__dirname, '/modules'));
app.set('view engine', 'jade');
app.use('/', routes);
app.use('/expose', expose);
app.use('/partials', partials);
app.get('*', function (req, res, next) {
  res.render('main/views/index');
});

module.exports = app;