
const isAuth = (req,res,next)=>{
    if(req.user){
        next();
    }else{
        res.render("error",{msg:'Please Login first'})
    }
}

module.exports = isAuth;