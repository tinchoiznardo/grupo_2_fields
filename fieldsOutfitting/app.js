var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var carritoRouter = require('./routes/carrito');
var registroRouter = require('./routes/registro');
var galeriaRouter = require('./routes/galeriaProductos');
var cargaRouter = require('./routes/cargaProducto')
var detalleRouter = require("./routes/detalleProducto")
var ingresoRouter = require("./routes/ingreso")


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/carrito', carritoRouter);
app.use('/registro', registroRouter);
app.use('/ingreso', ingresoRouter);
app.use('/productos', galeriaRouter);
app.use('/cargaProducto', cargaRouter);
app.use('/detalle', detalleRouter);


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
