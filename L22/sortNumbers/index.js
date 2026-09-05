const fs = require("fs");
const path = require("path");

function readFile(fileName){
    const loc = path.join(__dirname,"data",fileName);
    return new Promise((resolve, reject) => {
        fs.readFile(loc,"utf-8",(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

readFile('input1.txt')
    .then((data1)=>{
        // console.log(data1);
        let arr1 = data1.split(" ");
        // console.log(arr1);
        readFile('input2.txt')
            .then((data2)=>{
                // console.log(data2);
                let arr2 = data2.split(" ");
                // console.log(arr2);

                let finalData = [...arr1,...arr2];
                finalData.sort((a,b)=> a-b);
                let outputData = finalData.join(" ");
                // let outputData = finalData.toString();
                console.log(outputData)

                let loc = path.join(__dirname,'data','output.txt');
                fs.writeFile(loc,outputData,(err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("DONE!")
                    }
                })

            })
    })
    .catch(()=>{
        console.log("Something Went Wrong!")
    })