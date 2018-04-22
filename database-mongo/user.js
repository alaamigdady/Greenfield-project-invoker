
//include mongoose in our project 
//open a connection to the patient database on our locally running instance of MongoDB.
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/patient');

//now we need to get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;
//connection error occurs
db.on('error', function() {
  console.log('mongoose connection error');
});
//connect successfully
db.once('open', function() {
  console.log('mongoose connected successfully');
});

//create our schema
var userSchema = mongoose.Schema({
  username:{type:String,unique:true},
  password:String,
  firstname:String,
  Lastname:String
 
});


//compiling our schema into a Model(class)
var User = mongoose.model('user', userSchema);

module.exports=User;


