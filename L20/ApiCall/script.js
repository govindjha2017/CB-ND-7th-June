const URL = 'https://api.themoviedb.org/3/discover/movie';
let token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmMyZTJhZjVhNWNmOWJmODRkY2NlY2UwZTBlMGMwZCIsIm5iZiI6MTc4Nzk4MTM3OS4zOTkwMDAyLCJzdWIiOiI2YTkyNmU0MzI4OTIwMzAwY2VmMmVjMzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TuHcUCuM3JlqMxuKNiXvVvV-2MCHElWtF8lS5mj8qcU'

fetch(URL,{method:'get',headers:{
    Authorization: `Bearer ${token}`
}}).then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data)=>{
        console.log(data)
    })


// fetch(URL,{method:'post',headers:{
//     Authorization: `Bearer ${token}`,
        data:{
            useranme
            password
        }
// }}).then((res)=>{
//         console.log(res);
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data)
//     })


