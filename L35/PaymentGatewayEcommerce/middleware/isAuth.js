
const isAuth = (req,res,next)=>{
    if(req.user){
        next();
    }else{
        req.flash("error","Please login first")
        res.redirect("/login");
        // res.render("error",{msg:'Please Login first'})
    }
}

module.exports = isAuth;