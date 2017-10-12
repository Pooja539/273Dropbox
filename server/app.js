var express = require('express');
var path = require('path');
var logger = require('morgan');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var index = require('./routes/index');
//var users = require('./routes/users');
var home =require('./routes/home');
 var mysql =require('./routes/mysql');
 var fileuploadroute = require('./routes/fileuploadroute');
var session = require('client-sessions');
var listfiles = require('./routes/listfiles');
var app = express();

//Enable CORS
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.set('port', process.env.PORT || 3000);
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({   
    cookieName: 'session',    
    secret: 'cmpe273_test_string',    
    duration: 30 * 60 * 1000,    //setting the time for active session
    activeDuration: 5 * 60 * 1000 }));
app.use(express.static(path.join(__dirname, 'public')));
app.post('/register',cors(), home.register);
app.post('/authenticate',cors(),home.authenticate);
app.post('/listfiles',cors(),listfiles.listfiles);
app.use('/files', cors(),fileuploadroute);
app.use('./uploads', express.static(path.join(__dirname, 'uploads/sal@yahoo.com')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
module.exports = app;
