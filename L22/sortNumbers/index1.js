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

async function main(){
   let data1 = await readFile('input1.txt');
   let data2 = await readFile('input2.txt');
   let arr1 = data1.split(" ");
   let arr2 = data2.split(" ");
    let finalData = [...arr1,...arr2];
    finalData.sort((a,b)=> a-b);
    let outputData = finalData.join(" ");
    // let outputData = finalData.toString();

    let loc = path.join(__dirname,'data','output.txt');
    fs.writeFile(loc,outputData,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("DONE!")
        }
    })

}

main()