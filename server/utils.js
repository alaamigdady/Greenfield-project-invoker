//helping functions to check if the user is logged in.
var session=require('express-session');

exports.isLoggedIn=function(req,res){
  if(req.session.user){
    return true
  }
  return false;
}

exports.checkUser=function(req,res,next){
  if(!exports.isLoggedIn(req)){
    res.redirect('/login')
  }else{
    next()
  }
}

exports.createSession=function(req,res,aUser){
  req.session.regenerate(function(){
    req.session.user=aUser;
    res.redirect('/')
  })
}
