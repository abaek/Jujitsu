#!/usr/bin/env node

// Libraries.
var express = require('express');
var path = require('path');
var app = express();
var debug = require('debug')('jujitsu');

// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '')));

// Load page.
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Set port and listen
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
