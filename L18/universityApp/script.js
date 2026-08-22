const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const URL = "http://universities.hipolabs.com/search?country=";
const list = document.querySelector(".list")

btn.addEventListener("click",()=>{
    // console.log(inp.value);

    const APILINK = URL + inp.value;
    fetchData(APILINK)
    inp.value=""
})


async function fetchData(APILINK){
    let res = await fetch(APILINK);
    let data = await res.json();
    // console.log(data);
    displayData(data)

}


function displayData(datas){
    list.innerHTML="";
    const x = document.createElement("div");
    const univeristyName = document.createElement("h2");
    univeristyName.innerText="Univeristy Name";
    univeristyName.style.width="40vw"
    x.appendChild(univeristyName)

    const univeristyState = document.createElement("h2");
    univeristyState.innerText="State";
    univeristyState.style.width="20vw"
    x.appendChild(univeristyState);

    const UniversityWebsite = document.createElement("h2");
    UniversityWebsite.innerText="website";
    UniversityWebsite.style.width="10vw"
    x.appendChild(UniversityWebsite);


    x.style.display="flex";
    x.style.justifyContent="space-between";

    list.appendChild(x);

    for(let data of datas){
        console.log(data);

        const div = document.createElement("div");
        div.style.border="1px solid red";
        div.style.display="flex";
        div.style.justifyContent="space-between"

        const name = document.createElement("p");
        name.innerText=data.name;
        name.style.width="40vw"
        const state = document.createElement("p");
        state.innerText=data["state-province"]
        state.style.width="20vw"
        const webiste = document.createElement("p");
        webiste.innerText=data["web_pages"][0];
        webiste.style.width="10vw"

        div.appendChild(name);
        div.appendChild(state);
        div.appendChild(webiste);

        list.appendChild(div);

    }

}