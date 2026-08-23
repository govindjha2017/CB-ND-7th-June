const API_URl = "https://dummyjson.com/products";
const productList = document.querySelector(".productList")

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


    for(let product of products){
        console.log(product);

        const div = document.createElement("div");
        div.classList.add("card");
        const str = `<img src=${product.images[0]}>
            <p class="category">${product.category}</p>
            <h2>${product.title}</h2>
            <p class="desc">${product.description}</p>
            <p class="price">$ ${product.price}</p>
            <p class="rating">${product.rating}</p>`
        div.innerHTML=str;

        productList.appendChild(div);
        
    }

}