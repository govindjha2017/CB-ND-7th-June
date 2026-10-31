
const isSeller = (req,res,next)=>{
    if(req.user && req.user.role=="seller"){
        next();
    }else{
        res.render("error",{msg:'permision denied!'})
    }
}

module.exports = isSeller;