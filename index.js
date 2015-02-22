var express = require('express');
var throng = require('throng');
var app = express();
var WORKERS = process.env.WEB_CONCURRENCY || 1

app.set('views', './views');
app.set('view engine', 'jade')
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', {active: 'Home'});
});

app.get('/about', function(req, res) {
  res.render('index', {active: 'About'});
});

function start() {
  app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
  });
}

throng(start, {
  workers: WORKERS,
  lifetime: Infinity
});

