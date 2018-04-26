//helping functions to check if the user is logged in.
var session=require('express-session');

exports.isLoggedIn=function(req,res){
  if(req.session.user){
    console.log(req.session.user);
    return true
  }
  return false;
}

exports.checkUser=function(req,res,next){
  if(!exports.isLoggedIn(req)){
    console.log('You Are not logged in');
    res.send('You Are not logged in')
  }else{
    console.log('next');
    next()
  }
}

exports.createSession=function(req,res,aUser,username,b){
  req.session.regenerate(function(){
    req.session.user=aUser;
    if (b) {
      res.send(`Welcome DR.${username} you create new user and you are logged in now`)
    }else{
      res.send(`Welcome DR.${username} you are logged in now`)
    }
  })
}
