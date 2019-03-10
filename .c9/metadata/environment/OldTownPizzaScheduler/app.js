{"changed":true,"filter":false,"title":"app.js","tooltip":"/OldTownPizzaScheduler/app.js","value":"var bodyParser = require(\"body-parser\");\nvar express = require(\"express\");\nvar app = express();\nvar path = require('path');\n\nvar mysql=require('mysql');\n\n//This creates the connection to mysql\nvar db = mysql.createConnection({\n     host      : 'awstest.cftyuv7rvxtd.us-west-2.rds.amazonaws.com',\n     user      : 'user',\n     password  : 'password',\n     database  : 'awsTest'\n});\n\n//Confirmation that MySql is connected\ndb.connect((err) => {\n     if(err){\n          throw err;\n     }\n     console.log(\"MySql Connected...\");\n});\n\n//View engine\napp.set(\"view engine\", \"ejs\");\napp.set('views', path.join(__dirname, 'views'));\n\n//Bodyparser Middleware\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({extended: true}));\n\n//Set static path used for css and whatnot\napp.use(express.static(path.join(__dirname, 'public')));\n\napp.get('/', function(req, res){\n    res.render(\"indexNotUser\");\n});\n\napp.get('/home', function(req,res){\n     res.render(\"indexIsUser\");\n});\n\napp.get('/login', function(req, res){\n    res.render(\"login\");\n});\n\napp.get(\"/signup\", function(req, res) {\n     res.render(\"signup\");\n});\n\napp.get('/announcements', function(req, res){\n    res.render(\"announcements\");\n});\n\napp.get('/mybudget', function(req, res){\n    res.render('budget');\n});\n\napp.get('/account', function(req, res){\n    res.render('account');\n});\napp.get('/schedule', function(req, res){\n    res.render(\"schedule\");\n});\n\napp.get('/calendar', function(req, res){\n    res.render(\"calendar\");\n});\napp.get('/arcade', function(req, res){\n    res.render(\"arcade\");\n});\napp.get('/messages', function(req, res){\n    res.render(\"messages\");\n});\n\napp.get('/oldMessage', function(req, res){\n    res.render(\"oldMessage\");\n});\n\napp.get(\"/logout\", function(req, res){\n    res.redirect(\"/login\");\n});\n\n//intakes a username and password in login page\n/*req.body.(name exactly the same as we set it to in the ejs file) */\napp.post('/login', function(req, res){\n     var loginUserName = req.body.loginUN;\n     var loginPassword = req.body.loginPW;\n     \n     //if username and password is inside the table then pop it out into a query \n     //var loginSql = \"Select Count(*) as count from users WHERE Username = ('\"+loginUserName+\"') AND Password = ('\"+loginPassword+\"')\";\n     var loginSql = \"Select Count(*) as count from users WHERE Username = ? AND Password = ?\";\n      \n      git push origin master -u\n     db.query(loginSql,\n          [\n               loginUserName,\n               loginPassword\n          ],\n          function(err, data) {\n               if(err){\n                    console.log(err);\n                    \n               } else {\n                    if (data[0].count > 0) {\n                         console.log(\"entry found\");\n                         console.log(loginSql);\n                         res.render('loginSuccess');\n                    } else {\n                         console.log(\"entry not found\");\n                         console.log(loginSql);\n                         res.render('loginFail');\n                    }\n               }\n         }\n     );\n     \n     //inputs the loginSql query to output if was passed through correctly\n     /*db.query(loginSql, function(err, data) {\n         if(err){\n              console.log(err);\n         }else{\n               if (data[0].count > 0) {\n                    console.log(\"entry found\");\n                    console.log(loginSql);\n                     res.render('indexIsUser');\n               } else {\n                    console.log(\"entry not found\");\n                    console.log(loginSql);\n                    res.render('login');\n               }\n         }\n     });*/\n});\n\n//posts the info back to the database when user created\napp.post('/signup', function(req, res){\n     var name = req.body.name;\n     var username = req.body.usernm;\n     var password = req.body.pw;\n     var email = req.body.email;\n     var phoneNo = req.body.phone;\n     //var signupSql = \"INSERT INTO users (Name, Username, Password, Email, PhoneNo) VALUES ('\"+name+\"', '\"+username+\"', '\"+password+\"', '\"+email+\"', '\"+phoneNo+\"')\";\n     var signupSql = \"INSERT INTO users (Name, Username, Password, Email, PhoneNo) VALUES (?,?,?,?,?)\";\n     //console.log(name, username, password, email, phoneNo);\n     \n     db.query(signupSql,\n          [\n               name,\n               username,\n               password,\n               email,\n               phoneNo\n          ],\n          function(err, data) {\n               if(err){\n                    console.log(\"username already taken\");\n                    res.render('signupFailed');\n               } else {\n                    console.log(\"successful entry\");\n                    res.render('signupSuccess');\n               }\n         }\n     );\n          \n     /*db.query(sql, function(err, data) {\n          if(err) throw err;\n          else{\n               console.log(\"successful entry\");\n               res.render('login');\n          }\n     });*/\n});\n\napp.post(\"/calendar\", function(req, res){\n     res.send('calendar');\n});\n\napp.listen(process.env.PORT, process.env.IP, function(){\n    console.log(\"The server has started\");\n});","undoManager":{"mark":-247,"position":100,"stack":[[{"start":{"row":98,"column":14},"end":{"row":98,"column":15},"action":"remove","lines":["v"],"id":271,"ignore":true},{"start":{"row":98,"column":14},"end":{"row":98,"column":15},"action":"insert","lines":["v"]}],[{"start":{"row":98,"column":15},"end":{"row":98,"column":16},"action":"insert","lines":["e"],"id":272,"ignore":true}],[{"start":{"row":98,"column":16},"end":{"row":98,"column":17},"action":"insert","lines":[" "],"id":273,"ignore":true}],[{"start":{"row":98,"column":17},"end":{"row":98,"column":20},"action":"insert","lines":["tab"],"id":274,"ignore":true}],[{"start":{"row":98,"column":20},"end":{"row":98,"column":22},"action":"insert","lines":["le"],"id":275,"ignore":true}],[{"start":{"row":98,"column":22},"end":{"row":98,"column":23},"action":"insert","lines":["d"],"id":276,"ignore":true}],[{"start":{"row":98,"column":23},"end":{"row":98,"column":25},"action":"insert","lines":["at"],"id":277,"ignore":true}],[{"start":{"row":98,"column":17},"end":{"row":98,"column":25},"action":"remove","lines":["tabledat"],"id":278,"ignore":true},{"start":{"row":98,"column":17},"end":{"row":98,"column":38},"action":"insert","lines":["tabledatafromhtmlpage"]}],[{"start":{"row":98,"column":38},"end":{"row":98,"column":39},"action":"insert","lines":[";"],"id":279,"ignore":true}],[{"start":{"row":98,"column":39},"end":{"row":98,"column":40},"action":"insert","lines":[" "],"id":280,"ignore":true}],[{"start":{"row":98,"column":40},"end":{"row":98,"column":42},"action":"insert","lines":["[]"],"id":281,"ignore":true}],[{"start":{"row":98,"column":41},"end":{"row":98,"column":45},"action":"insert","lines":["Jimm"],"id":282,"ignore":true}],[{"start":{"row":98,"column":45},"end":{"row":98,"column":48},"action":"insert","lines":["y, "],"id":283,"ignore":true}],[{"start":{"row":98,"column":48},"end":{"row":98,"column":50},"action":"insert","lines":["4-"],"id":284,"ignore":true}],[{"start":{"row":98,"column":50},"end":{"row":98,"column":52},"action":"insert","lines":["5,"],"id":285,"ignore":true}],[{"start":{"row":98,"column":52},"end":{"row":98,"column":53},"action":"insert","lines":[" "],"id":286,"ignore":true}],[{"start":{"row":98,"column":53},"end":{"row":98,"column":59},"action":"insert","lines":["123123"],"id":287,"ignore":true}],[{"start":{"row":98,"column":59},"end":{"row":98,"column":61},"action":"insert","lines":[", "],"id":288,"ignore":true}],[{"start":{"row":98,"column":61},"end":{"row":98,"column":66},"action":"insert","lines":["james"],"id":289,"ignore":true}],[{"start":{"row":98,"column":66},"end":{"row":98,"column":68},"action":"insert","lines":[", "],"id":290,"ignore":true}],[{"start":{"row":98,"column":68},"end":{"row":98,"column":70},"action":"insert","lines":["67"],"id":291,"ignore":true}],[{"start":{"row":98,"column":69},"end":{"row":98,"column":70},"action":"remove","lines":["7"],"id":292,"ignore":true}],[{"start":{"row":98,"column":69},"end":{"row":98,"column":70},"action":"insert","lines":["-"],"id":293,"ignore":true}],[{"start":{"row":98,"column":70},"end":{"row":98,"column":71},"action":"insert","lines":["c"],"id":294,"ignore":true}],[{"start":{"row":98,"column":71},"end":{"row":98,"column":73},"action":"insert","lines":[", "],"id":295,"ignore":true}],[{"start":{"row":98,"column":73},"end":{"row":98,"column":82},"action":"insert","lines":["432522345"],"id":296,"ignore":true}],[{"start":{"row":98,"column":82},"end":{"row":98,"column":85},"action":"insert","lines":["342"],"id":297,"ignore":true}],[{"start":{"row":98,"column":53},"end":{"row":98,"column":59},"action":"remove","lines":["123123"],"id":298,"ignore":true},{"start":{"row":98,"column":53},"end":{"row":98,"column":62},"action":"insert","lines":[" 12345678"]}],[{"start":{"row":98,"column":41},"end":{"row":98,"column":42},"action":"insert","lines":["{"],"id":299,"ignore":true}],[{"start":{"row":98,"column":77},"end":{"row":98,"column":89},"action":"remove","lines":["432522345342"],"id":300,"ignore":true},{"start":{"row":98,"column":77},"end":{"row":98,"column":90},"action":"insert","lines":[" 274982374987"]}],[{"start":{"row":98,"column":41},"end":{"row":98,"column":42},"action":"remove","lines":["{"],"id":301,"ignore":true}],[{"start":{"row":98,"column":41},"end":{"row":98,"column":42},"action":"insert","lines":["{"],"id":302,"ignore":true}],[{"start":{"row":98,"column":63},"end":{"row":98,"column":64},"action":"remove","lines":[","],"id":303,"ignore":true}],[{"start":{"row":98,"column":63},"end":{"row":98,"column":64},"action":"insert","lines":["}"],"id":304,"ignore":true}],[{"start":{"row":98,"column":65},"end":{"row":98,"column":66},"action":"insert","lines":["{"],"id":305,"ignore":true}],[{"start":{"row":98,"column":91},"end":{"row":98,"column":92},"action":"insert","lines":["}"],"id":306,"ignore":true}],[{"start":{"row":98,"column":93},"end":{"row":99,"column":4},"action":"insert","lines":["","    "],"id":307,"ignore":true}],[{"start":{"row":99,"column":4},"end":{"row":99,"column":6},"action":"insert","lines":["re"],"id":308,"ignore":true}],[{"start":{"row":99,"column":4},"end":{"row":99,"column":6},"action":"remove","lines":["re"],"id":309,"ignore":true}],[{"start":{"row":99,"column":4},"end":{"row":99,"column":8},"action":"insert","lines":["//re"],"id":310,"ignore":true}],[{"start":{"row":99,"column":8},"end":{"row":99,"column":11},"action":"insert","lines":["adf"],"id":311,"ignore":true}],[{"start":{"row":99,"column":11},"end":{"row":100,"column":4},"action":"insert","lines":["ile","    "],"id":312,"ignore":true}],[{"start":{"row":100,"column":3},"end":{"row":100,"column":4},"action":"remove","lines":[" "],"id":313,"ignore":true}],[{"start":{"row":100,"column":2},"end":{"row":100,"column":3},"action":"remove","lines":[" "],"id":314,"ignore":true}],[{"start":{"row":100,"column":0},"end":{"row":100,"column":2},"action":"remove","lines":["  "],"id":315,"ignore":true}],[{"start":{"row":99,"column":14},"end":{"row":100,"column":0},"action":"remove","lines":["",""],"id":316,"ignore":true},{"start":{"row":99,"column":14},"end":{"row":99,"column":15},"action":"insert","lines":[" "]}],[{"start":{"row":99,"column":15},"end":{"row":99,"column":18},"action":"insert","lines":["get"],"id":317,"ignore":true}],[{"start":{"row":99,"column":18},"end":{"row":99,"column":20},"action":"insert","lines":["re"],"id":318,"ignore":true}],[{"start":{"row":99,"column":20},"end":{"row":99,"column":22},"action":"insert","lines":["qu"],"id":319,"ignore":true}],[{"start":{"row":99,"column":22},"end":{"row":99,"column":25},"action":"insert","lines":["est"],"id":320,"ignore":true}],[{"start":{"row":99,"column":25},"end":{"row":99,"column":27},"action":"insert","lines":[" /"],"id":321,"ignore":true}],[{"start":{"row":99,"column":27},"end":{"row":99,"column":31},"action":"insert","lines":["sche"],"id":322,"ignore":true}],[{"start":{"row":99,"column":31},"end":{"row":99,"column":35},"action":"insert","lines":["duls"],"id":323,"ignore":true}],[{"start":{"row":99,"column":34},"end":{"row":99,"column":35},"action":"remove","lines":["s"],"id":324,"ignore":true}],[{"start":{"row":99,"column":34},"end":{"row":100,"column":4},"action":"insert","lines":["e","    "],"id":325,"ignore":true}],[{"start":{"row":100,"column":4},"end":{"row":100,"column":6},"action":"insert","lines":["re"],"id":326,"ignore":true}],[{"start":{"row":100,"column":6},"end":{"row":100,"column":8},"action":"insert","lines":["s."],"id":327,"ignore":true}],[{"start":{"row":100,"column":8},"end":{"row":100,"column":9},"action":"insert","lines":["e"],"id":328,"ignore":true}],[{"start":{"row":100,"column":8},"end":{"row":100,"column":9},"action":"remove","lines":["e"],"id":329,"ignore":true},{"start":{"row":100,"column":8},"end":{"row":100,"column":9},"action":"insert","lines":["r"]}],[{"start":{"row":100,"column":9},"end":{"row":100,"column":12},"action":"insert","lines":["end"],"id":330,"ignore":true}],[{"start":{"row":100,"column":12},"end":{"row":100,"column":14},"action":"insert","lines":["er"],"id":331,"ignore":true}],[{"start":{"row":100,"column":14},"end":{"row":100,"column":16},"action":"insert","lines":["()"],"id":332,"ignore":true}],[{"start":{"row":100,"column":15},"end":{"row":100,"column":18},"action":"insert","lines":["\"s\""],"id":333,"ignore":true}],[{"start":{"row":100,"column":17},"end":{"row":100,"column":18},"action":"insert","lines":["c"],"id":334,"ignore":true}],[{"start":{"row":100,"column":18},"end":{"row":100,"column":20},"action":"insert","lines":["he"],"id":335,"ignore":true}],[{"start":{"row":100,"column":20},"end":{"row":100,"column":24},"action":"insert","lines":["dule"],"id":336,"ignore":true}],[{"start":{"row":100,"column":25},"end":{"row":100,"column":27},"action":"insert","lines":[", "],"id":337,"ignore":true}],[{"start":{"row":100,"column":27},"end":{"row":100,"column":31},"action":"insert","lines":["tabl"],"id":338,"ignore":true}],[{"start":{"row":100,"column":31},"end":{"row":100,"column":32},"action":"insert","lines":["e"],"id":339,"ignore":true}],[{"start":{"row":100,"column":32},"end":{"row":100,"column":34},"action":"insert","lines":["da"],"id":340,"ignore":true}],[{"start":{"row":100,"column":34},"end":{"row":100,"column":36},"action":"insert","lines":["ta"],"id":341,"ignore":true}],[{"start":{"row":100,"column":36},"end":{"row":100,"column":37},"action":"insert","lines":["h"],"id":342,"ignore":true}],[{"start":{"row":100,"column":37},"end":{"row":100,"column":39},"action":"insert","lines":["tm"],"id":343,"ignore":true}],[{"start":{"row":100,"column":39},"end":{"row":100,"column":41},"action":"insert","lines":["l:"],"id":344,"ignore":true}],[{"start":{"row":100,"column":41},"end":{"row":100,"column":42},"action":"insert","lines":[" "],"id":345,"ignore":true}],[{"start":{"row":100,"column":42},"end":{"row":100,"column":46},"action":"insert","lines":["tabl"],"id":346,"ignore":true}],[{"start":{"row":100,"column":46},"end":{"row":100,"column":48},"action":"insert","lines":["ef"],"id":347,"ignore":true}],[{"start":{"row":100,"column":48},"end":{"row":100,"column":51},"action":"insert","lines":["rom"],"id":348,"ignore":true}],[{"start":{"row":100,"column":50},"end":{"row":100,"column":51},"action":"remove","lines":["m"],"id":349,"ignore":true}],[{"start":{"row":100,"column":50},"end":{"row":100,"column":52},"action":"insert","lines":["md"],"id":350,"ignore":true}],[{"start":{"row":100,"column":52},"end":{"row":100,"column":55},"action":"insert","lines":["ata"],"id":351,"ignore":true}],[{"start":{"row":100,"column":55},"end":{"row":100,"column":56},"action":"insert","lines":["b"],"id":352,"ignore":true}],[{"start":{"row":100,"column":56},"end":{"row":100,"column":58},"action":"insert","lines":["as"],"id":353,"ignore":true}],[{"start":{"row":100,"column":58},"end":{"row":100,"column":59},"action":"insert","lines":["e"],"id":354,"ignore":true}],[{"start":{"row":93,"column":0},"end":{"row":114,"column":3},"action":"remove","lines":["      ","      Name     times     phoneN","    Jimmy      4-5       12345678","    james      6-c       274982374987","    ","    Button: Save tabledatafromhtmlpage; [{Jimmy, 4-5,  12345678} {james, 6-c,  274982374987}]","    //readfile getrequest /schedule","    res.render(\"schedule\", tabledatahtml: tablefromdatabase)","    //rows  ","     for(var i = 0; i < tableLength, i++ ){","          i=0 //row","          //column","          for(var j, j =< columnLength, j++){","               //column 0 1 2 3 4 end","               var array entrydata array += tabledatafromhtmlpage[i][j];","               cell 1: James cell 2: 4-c","               entrydata[james, 4-c","               ","          }","          ","     }","   "],"id":355,"ignore":true}],[{"start":{"row":92,"column":6},"end":{"row":93,"column":3},"action":"remove","lines":["","   "],"id":356,"ignore":true}],[{"start":{"row":92,"column":6},"end":{"row":93,"column":6},"action":"insert","lines":["","      "],"id":357,"ignore":true}],[{"start":{"row":93,"column":6},"end":{"row":93,"column":10},"action":"insert","lines":["git "],"id":358,"ignore":true}],[{"start":{"row":93,"column":10},"end":{"row":93,"column":12},"action":"insert","lines":["co"],"id":359,"ignore":true}],[{"start":{"row":93,"column":12},"end":{"row":93,"column":15},"action":"insert","lines":["mmi"],"id":360,"ignore":true}],[{"start":{"row":93,"column":15},"end":{"row":93,"column":16},"action":"insert","lines":["t"],"id":361,"ignore":true}],[{"start":{"row":93,"column":13},"end":{"row":93,"column":16},"action":"remove","lines":["mit"],"id":362,"ignore":true}],[{"start":{"row":93,"column":10},"end":{"row":93,"column":13},"action":"remove","lines":["com"],"id":363,"ignore":true}],[{"start":{"row":93,"column":10},"end":{"row":93,"column":11},"action":"insert","lines":["p"],"id":364,"ignore":true}],[{"start":{"row":93,"column":11},"end":{"row":93,"column":15},"action":"insert","lines":["ush "],"id":365,"ignore":true}],[{"start":{"row":93,"column":15},"end":{"row":93,"column":19},"action":"insert","lines":["orig"],"id":366,"ignore":true}],[{"start":{"row":93,"column":19},"end":{"row":93,"column":25},"action":"insert","lines":["in mas"],"id":367,"ignore":true}],[{"start":{"row":93,"column":25},"end":{"row":93,"column":29},"action":"insert","lines":["ter "],"id":368,"ignore":true}],[{"start":{"row":93,"column":29},"end":{"row":93,"column":30},"action":"insert","lines":[" "],"id":369,"ignore":true}],[{"start":{"row":93,"column":29},"end":{"row":93,"column":30},"action":"remove","lines":[" "],"id":370,"ignore":true}],[{"start":{"row":93,"column":29},"end":{"row":93,"column":31},"action":"insert","lines":["-u"],"id":371,"ignore":true}]]},"ace":{"folds":[],"scrolltop":1309.5,"scrollleft":0,"selection":{"start":{"row":92,"column":6},"end":{"row":92,"column":6},"isBackwards":false},"options":{"tabSize":5,"useSoftTabs":true,"guessTabSize":false,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":80,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1552181657954}