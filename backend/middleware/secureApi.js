let secureApi =(req,res,next)=>{
   
    if(req.headers.authorization == "3/7r8Ej/l5&'"){
     next();
    }
    else{
       res.status(401);
     res.send({error:"invalid"})
    }
 
 };
 
 
 module.exports = secureApi;