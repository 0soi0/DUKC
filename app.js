var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var insertRouter = require('./routes/insert');
var selectRouter = require('./routes/select');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/add', indexRouter);
app.use('/', insertRouter);
app.use('/', selectRouter);

module.exports = app;
