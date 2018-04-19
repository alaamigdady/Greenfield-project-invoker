var router=require('express').Router();
var controller;
//routes and handling requests.

router.route('/').get(function(req,res){
  res.send('hi')
})

//retrieve a pateint.
router.route('/patient').get(function(req,res){
  console.log('terminal console hi');
  res.send('hello world!')
})

//create a patient.
router.route('/patient').post()

//update patient information.
router.route('/patient').put()

//delete a patient.
router.route('/patient').delete()

//get all patients
router.route('/patients').get()



module.exports=router;
