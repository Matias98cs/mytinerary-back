require('dotenv').config();
require('./config/database');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var cityRouter = require('./routes/cityRouter');
var authRouter = require('./routes/authRouter')
var itineraryRouter = require('./routes/itineraryRouter')
var commentRouter = require('./routes/commentRouter')
var activityRouter = require('./routes/activityRouter')
// var usersRouter = require('./routes/users');

var app = express();

// view engine setupD
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use('/cities', cityRouter)
app.use('/auth', authRouter)
app.use('/itineraries', itineraryRouter)
app.use('/comments', commentRouter )
app.use('/activities', activityRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
