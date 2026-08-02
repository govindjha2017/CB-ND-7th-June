function kalMilneAayega(res){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(res){
                resolve("To main tujhe party dunga!")
            }else{
                reject("chalo koi nhi")
            }
        },5000)
    })
}

///dost 

console.log("START")

kalMilneAayega(true)
    .then((msg)=>{
        console.log(msg)
    })
    .catch((msg)=>{
        console.log(msg);
    })
    .finally(()=>{
        console.log("ok")
    })


console.log("END");