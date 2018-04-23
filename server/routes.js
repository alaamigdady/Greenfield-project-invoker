var router=require('express').Router();
var controller=require('../database-mongo/PatientController');
var utils=require('./utils')
var bcrypt=require('bcrypt')
var bodyParser = require('body-parser');
var path=require('path')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended : true}))
//routes and handling requests.


router.route('/login').get(function(req,res){
  res.send('hi')
})

router.route('/login').post(function(req,res){
  var username=req.body.username;
  var password=req.body.password;

  User.find({username:username},function(err,user){
    if(!user){
      return res.redirect('/login')
    }
    bcrypt.compare(password,user.password,function(err,match){
      if(match){
        utils.createSession(req,res,user)
      }else{
        res.redirect('/login')

      }
    })
  })
})

router.route('/signup').get(function(req,res){
  // res.sendFile(__dirname + '/../react-client/dist/index.html')
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
})

router.route('/signup').post(function(req,res){
// console.log(req.body);
// res.end('done')
  var username=req.body.username;
  var password=req.body.password;
  var firstName=req.body.firstName;
  var lastName=req.body.lastName;


  User.find({username:username},function(err,user){
    if(!user){
      bcrypt.hash(password,null,function(err,hash){

          var user=new User({firstName:firstName,lastName:lastName,username:username,password:hash})
          user.save(function(err,user){
            console.log(user);
            utils.createSession(req,res,user)
          })

          })
  }else{
    console.log("User already exists!");
    res.redirect('/signup');
  }
  })
})

router.route('/').get(function(req,res){

})
//retrieve a pateint.
router.route('/patient').get(utils.checkUser,controller.retrieveOne)

//create a patient.
router.route('/patient').post(utils.checkUser,controller.createOne)

//update patient information.
router.route('/patient').put(utils.checkUser,controller.updateOne)

//delete a patient.
router.route('/patient').delete(utils.checkUser,controller.delete)

//get all patients
router.route('/patients').get(utils.checkUser,controller.retrieveAll)



module.exports=router;
