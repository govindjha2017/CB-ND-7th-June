const API_URl = "https://dummyjson.com/products";
const productList = document.querySelector(".productList");
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const msg = document.querySelector(".msg");
const sortSelect = document.getElementById("sortSelect");

let products = [];
let filterProducts = [];


async function fetchProducts(){
    let res = await fetch(API_URl);
    // console.log(res);
    let data = await res.json();
    // console.log(data.products);
    products= [...data.products];
    displayProducts(products)
}

fetchProducts()

function displayProducts(products){
    productList.innerHTML="";
    msg.innerText="";
    if(products.length==0){
        msg.innerText="Products Not found"
    }else{
        
        for(let product of products){
            // console.log(product);

            const div = document.createElement("div");
            div.classList.add("card");
            const str = `<img src=${product.images[0]}>
                <p class="category">${product.category}</p>
                <h2>${product.title}</h2>
                <p class="desc">${product.description}</p>
                <p class="price">$ ${product.price}</p>
                <p class="rating">⭐${product.rating}</p>`
            div.innerHTML=str;

            productList.appendChild(div);  
        }
    }
}

btn.addEventListener("click",serachProduct);

async function serachProduct(){
    if(inp.value!=""){
        let serachValue = inp.value.trim();
        const URL = "http://dummyjson.com/products/search?q="
        console.log(serachValue)
        const apiLink = URL+serachValue;
        inp.value="";
        let res = await fetch(apiLink);
        let data = await res.json();
        console.log(data.products);
        products= data.products;
        displayProducts(products);
    }else{

    }
}

sortSelect.addEventListener("change",sortproduct);

function sortproduct(){
    filterProducts=[...products];

    console.log(sortSelect.value);

    if(sortSelect.value=="price-high"){
        filterProducts.sort((a,b)=>b.price-a.price)
    }else if(sortSelect.value=="price-low"){
        filterProducts.sort((a,b)=>a.price-b.price)
    }else if(sortSelect.value=="rating-high"){
        filterProducts.sort((a,b)=>b.rating-a.rating)
    }else if(sortSelect.value=="rating-low"){
        filterProducts.sort((a,b)=>a.rating-b.rating)
    }else if(sortSelect.value=="sort"){
        filterProducts=[...products];
    }
    if(filterProducts==products){
        console.log("yes")
    }
    displayProducts(filterProducts)

}