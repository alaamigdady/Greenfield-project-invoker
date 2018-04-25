var express = require('express');
var bodyParser = require('body-parser');
var router=require('./routes.js');
var session=require('express-session');


var app = express();


app.use(session({
  secret:"123456",
  resave: false,
  saveUninitialized: true
}))

app.use('/',router)

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });
var port =  process.env.PORT || 3000
app.listen( port , function() {
  console.log('listening on port: ', port);
})
