const APILINK = "https://official-joke-api.appspot.com/random_joke";

const box = document.getElementsByClassName("box")[0];

async function fetchData(){
    let res = await fetch(APILINK);
    let data = await res.json()
    console.log(data);
    displayData(data);
}

function displayData(data){
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
}

fetchData()
