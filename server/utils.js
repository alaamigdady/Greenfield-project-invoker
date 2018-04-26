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
    //jozaa
    res.send('You Are not logged in')
    //next()
  }else{
    console.log('next');
    next()
  }
}

exports.createSession=function(req,res,aUser){
  req.session.regenerate(function(){
    req.session.user=aUser;
    // console.log(req.session);
    //jozaa
    res.send(`Welcome DR. you are logged in now`)
  })
}
