/**
 * This is the js file acts as server
 */

 //importing the required js file 
 var express=require('express');
 //var routes = require('./routes');
 var http = require('http');
 var path = require('path');
 var bodyParser = require('body-parser');

 //loading the chits 
 var chits=require('./routes/chits');
 var admin=require('./routes/admin');
 var app=express();

//setting the view engine
app.set('port', process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//using middleware
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

//using body parsers
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//setting the static path
app.use(express.static(path.join(__dirname,'public')));

app.get('/',chits.sendindex);
//registration url
app.get('/chits/registration',chits.sendregister);
app.post('/chits/registration/send',chits.register);
//login url
app.get('/chits/login',chits.sendlogin);
app.post('/chits/validateUser',chits.validateuser);
//usertype change url
app.get('/chits/addadmin',chits.sendadmin);
app.post('/chits/adminpass',chits.usertypechange);
app.post('/chits/rolechange',chits.rolechange);

//this get is uded to send the admin page
app.get('/chits/adminpage/:username',chits.sendadminpage)

//this uses to call the method to add chits of user
app.get('/adminchits/addchits',admin.showaddform)

app.post('/adminchit/add',admin.insertchit);

//cheak the validation of registration ajax request
app.get('/new/check',chits.check);

http.createServer(app).listen(app.get('port'),function(){
    console.log('Express server listening on port ' + app.get('port'));
})