var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var insertRouter = require('./routes/insert');
var selectRouter = require('./routes/select');
var patchRouter = require('./routes/patch');
var deleteRouter =require('./routes/delete');
var pageViewRouter = require('./routes/pageView');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/add', insertRouter);
app.use('/show', selectRouter);
app.use('/delete', deleteRouter);
app.use('/patch', patchRouter);
app.use('/view', pageViewRouter);

module.exports = app;
