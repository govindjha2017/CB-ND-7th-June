const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Working Fine!")
})

app.get('/about',(req,res)=>{
    res.send("this is my about page")
})

app.get('/project',(req,res)=>{
    res.send("this is my project page")
})

app.get('/cat',(req,res)=>{
    res.send('Meowwwwwwwwwwww!')
})

app.get('/products',(req,res)=>{
    res.send('product page')
})

app.get('/cat',(req,res)=>{
    res.send('Meowwwwwwwwwwww2!')
})

// app.get('/products/1',(req,res)=>{
//     res.send("you want to view product of id 1")
// })
// app.get('/products/2',(req,res)=>{
//     res.send("you want to view product of id 2")
// })
// app.get('/products/3',(req,res)=>{
//     res.send("you want to view product of id 1")
// })


app.get('/products/:prodctID',(req,res)=>{
    console.log(req.params);
    const {prodctID} = req.params;
    //logic 
    res.send(`you want to view product of id ${prodctID}`)
})

app.get('/login/:username/:password',(req,res)=>{
    console.log(req.params)
    res.send("ok")
})

app.get('/getData',(req,res)=>{
    console.log(req.query);
    const productName = req.query.product
    // res.send("getData routes hit")
    res.send(`you want to view ${productName}`)
})


let movies = [
    {name:'avanger',rating:8.5},
    {name:'hulk',rating:9.5},
    {name:'thor',rating:6.8},
]

app.get('/getMovie',(req,res)=>{
    const {name} = req.query;
    
    let movieData = movies.find((item)=> item.name==name);

    res.json(movieData)
})

app.get('/html',(req,res)=>{
    res.status(200).send('<h1>this is html content</h1>')
})




app.get(/.*/,(req,res)=>{
    res.status(404).send("404 page not found")
})


const PORT = 3000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})