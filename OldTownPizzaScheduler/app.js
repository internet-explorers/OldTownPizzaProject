var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var path = require('path');

var mysql=require('mysql');

//This creates the connection to mysql
var db = mysql.createConnection({
     host      : 'awstest.cftyuv7rvxtd.us-west-2.rds.amazonaws.com',
     user      : 'user',
     password  : 'password',
     database  : 'awsTest'
});

//Confirmation that MySql is connected
db.connect((err) => {
     if(err){
          throw err;
     }
     console.log("MySql Connected...");
});

//View engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

//Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Set static path used for css and whatnot
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render("indexNotUser");
});

app.get('/home', function(req,res){
     res.render("indexIsUser");
});

app.get('/login', function(req, res){
    res.render("login");
});

app.get("/signup", function(req, res) {
     res.render("signup");
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

//get date
let curr = new Date;
let weekDates = [];
let monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
for (let i = 1; i <= 7; i++) {
  let first = curr.getDate() - curr.getDay() + i;
  let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
  weekDates.push(day);
}
let thisMonthStr = monthNames[curr.getMonth()];
let thisYearStr = curr.getFullYear();
app.get('/schedule', function(req, res){
      let datesThisWeek = [];
    weekDates.forEach(function(day){
      datesThisWeek.push(day.slice(8));
    });
    res.render("schedule",{datesThisWeek: datesThisWeek, thisMonthStr: thisMonthStr, thisYearStr: thisYearStr});
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

app.get('/oldMessage', function(req, res){
    res.render("oldMessage");
});

app.get("/logout", function(req, res){
    res.redirect("/login");
});

//intakes a username and password in login page
/*req.body.(name exactly the same as we set it to in the ejs file) */
app.post('/login', function(req, res){
     var loginUserName = req.body.loginUN;
     var loginPassword = req.body.loginPW;
     
     //if username and password is inside the table then pop it out into a query 
     //var loginSql = "Select Count(*) as count from users WHERE Username = ('"+loginUserName+"') AND Password = ('"+loginPassword+"')";
     var loginSql = "Select Count(*) as count from users WHERE Username = ? AND Password = ?";
      
 
     db.query(loginSql,
          [
               loginUserName,
               loginPassword
          ],
          function(err, data) {
               if(err){
                    console.log(err);
                    
               } else {
                    if (data[0].count > 0) {
                         console.log("entry found");
                         console.log(loginSql);
                         res.render('loginSuccess');
                    } else {
                         console.log("entry not found");
                         console.log(loginSql);
                         res.render('loginFail');
                    }
               }
         }
     );
     
     //inputs the loginSql query to output if was passed through correctly
     /*db.query(loginSql, function(err, data) {
         if(err){
              console.log(err);
         }else{
               if (data[0].count > 0) {
                    console.log("entry found");
                    console.log(loginSql);
                     res.render('indexIsUser');
               } else {
                    console.log("entry not found");
                    console.log(loginSql);
                    res.render('login');
               }
         }
     });*/
});

//posts the info back to the database when user created
app.post('/signup', function(req, res){
     var name = req.body.name;
     var username = req.body.usernm;
     var password = req.body.pw;
     var email = req.body.email;
     var phoneNo = req.body.phone;
     //var signupSql = "INSERT INTO users (Name, Username, Password, Email, PhoneNo) VALUES ('"+name+"', '"+username+"', '"+password+"', '"+email+"', '"+phoneNo+"')";
     var signupSql = "INSERT INTO users (Name, Username, Password, Email, PhoneNo) VALUES (?,?,?,?,?)";
     //console.log(name, username, password, email, phoneNo);
     
     db.query(signupSql,
          [
               name,
               username,
               password,
               email,
               phoneNo
          ],
          function(err, data) {
               if(err){
                    console.log("username already taken");
                    res.render('signupFailed');
               } else {
                    console.log("successful entry");
                    res.render('signupSuccess');
               }
         }
     );
          
     /*db.query(sql, function(err, data) {
          if(err) throw err;
          else{
               console.log("successful entry");
               res.render('login');
          }
     });*/
});

app.post('/schedule', function(req, res){
     // var empID = req.body.e.target;
     // var empName = req.body.B;
     // var empPhone = req.body.C;
     // var empPosition = req.body.D;
     let tableTitle = req.body.schedule_title;
     let htmlCode = req.body.htmlCode;
     
     
     var schedData = "INSERT INTO scheduler (TableTitle) VALUES ?";
     
          db.query(schedData,
          [
               tableTitle,
          ],
 
          function(err, data) {
               if(err){
                    console.log(err);
                    
               } else {
                    console.log("success");
               }
          }
     );
});

app.post("/calendar", function(req, res){
     res.send('calendar');
});

app.post("/", function(req, res){
     console.log(req.body);
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started");
});