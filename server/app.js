
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  ,	home =require('./routes/home')
  , mysql =require('./routes/mysql')
  , fileuploadroute = require('./routes/fileuploadroute');

var app = express();
var cors = require('cors');
var Router = require('router')
// all environments
app.use(cors());
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/register',cors(), home.register);
app.post('/authenticate',cors(),home.authenticate);
app.post('/files',cors(),fileuploadroute);

//app.use('./files/meet@gmail.com', express.static(path.join(__dirname, 'meet@gmail.com')));
//app.use('./public/uploads', express.static(path.join(__dirname, 'uploads')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



module.exports = app;