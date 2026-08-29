


// fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res)=>{
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data);
//     })

async function fetchData(){
   let data = await axios.get("https://dog.ceo/api/breeds/image/random");
  console.log(data)
}

fetchData();