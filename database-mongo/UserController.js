var User= require('./user');
//controller methods:


//1.create one user 
exports.signup = function (req, res) {
  var username=req.body.username;
  var password=req.body.password;
  var firstname=req.body.firstname;
  var lastname=req.body.lastname;

  var newuser=new User();
  newuser.username=username;
  newuser.password=password;
  newuser.firstname=firstname;
  newuser.lastname=lastname;


	newuser.save(function(err,user){
		if(err){
			console.log(error)
		}
		res.send('user Created ')
	})
};

exports.login=function(req,res){
User.findById(req.body.username,req.body.password,function(err,user){
	if(err){
		console.log(err)
		res.send(500);
           }
           else{
           	if(!user)
           		console.log('user not found ')
           		}
           		else{
           			return res.send()
           		}
           	})
           };	







