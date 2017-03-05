var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var helpers = require('./helpers/helpers')
var lxRouter = require('./Routes/lxRouter')(helpers);

app.use('/', lxRouter);

app.listen(port, function() {
  console.log('Running on PORT: ' + port);
});
