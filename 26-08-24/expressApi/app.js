// console.log("Starting express with nodemon");
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const mongoose =require('mongoose');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var productsRouter=require('./routes/product');
// var authorRouter=require("./routes/authors");
// var todosapiRouter=require("./routes/todosapi");

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/products',productsRouter);
// app.use('/authors',authorRouter);
// app.use('/todos',todosapiRouter)

// let mongoConsUrl="mongodb://localhost/ascendion";
// mongoose.connect(mongoConsUrl);
// let db=mongoose.connection;
// db.on("error",function(){
//   console.log("Error come in connecting");
// });
// db.on("connected",function(){
//   console.log("Coonected to mongoose database named ascendion");
// })

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;


const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/product');
const authorRouter = require('./routes/authors');
const todosapiRouter = require('./routes/todosapi');
const carrentalsuserRouter=require('./routes/userrentaluser');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/authors', authorRouter);
app.use('/todos', todosapiRouter);
app.use('/carsUser',carrentalsuserRouter);

// MongoDB connection
const mongoConsUrl = 'mongodb://localhost/ascendion';
mongoose.connect(mongoConsUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', () => console.log('Error connecting to MongoDB'));
db.once('open', () => console.log('Connected to MongoDB'));

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.use((req, res, next) => {
  console.log('Request Headers:', req.headers);
  next();
});

module.exports = app;
