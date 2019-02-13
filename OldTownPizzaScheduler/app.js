var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var path = require('path');

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "username",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to mysql!");
});*/

//View engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

//Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Set static path used for css and whatnot
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get('/announcements', function(req, res){
    res.render("announcements");
});

app.get('/mybudget', function(req, res){
    res.render('budget');
});

app.get('/account', function(req, res){
    res.render('account');
});

app.get('/calendar', function(req, res){
    res.render("calendar");
});
app.get('/arcade', function(req, res){
    res.render("arcade");
});
app.get('/messages', function(req, res){
    res.render("messages");
});

app.post("/login", function(req, res){
    res.send(req.body.username);
});

app.get('/signin', function(req, res){
    res.render("signin");
});

app.post("/calendar", function(req, res){
    res.send('calendar');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started");
});
