var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const methodOverride =  require('method-override');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cartRouter = require('./routes/cart');
var productsRouter = require('./routes/products');
var apiUsersRouter = require('./routes/api/users.js')
var apiProductsRouter = require('./routes/api/products.js')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')); 
app.use(session( {
  secret: 'keyboard cat',
  resave: true,
  saveUnintialized: true,
}));

app.use('/', indexRouter);
app.use('/cart', cartRouter);
app.use('/user', usersRouter);
app.use('/products', productsRouter);
app.use ('/api/users',apiUsersRouter);
app.use ('/api/products',apiProductsRouter);
//app.use ('/api/products',apiProductsRouter);


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
