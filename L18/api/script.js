const APILINK = "https://official-joke-api.appspot.com/random_joke";

const box = document.getElementsByClassName("box")[0];

fetch(APILINK)
    .then((res)=>{
        console.log(res);
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        console.log(data.setup);
        console.log(data.punchline);

        const h2 = document.createElement("h2");
        h2.innerText="Setup: " +  data.setup
        console.log(h2);
        box.appendChild(h2);

        const h3 = document.createElement("h3");
        box.appendChild(h3);
        let counter =6;
        let id = setInterval(()=>{
            counter--;
            h3.innerText=counter;
        },1000)

        setTimeout(()=>{
            clearInterval(id);
            h3.innerText="Punchline: " + data.punchline
        },6000)
        

    })
    .catch((err)=>{
        console.log(err);
    })




