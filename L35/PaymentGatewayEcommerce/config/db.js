const mongoose = require("mongoose");

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URL)
        .then(()=>{console.log('DB conected!')})
        .catch((err)=>{
            console.log('DB not conected!');
            console.log(err);
        })
}

module.exports = connectDB;