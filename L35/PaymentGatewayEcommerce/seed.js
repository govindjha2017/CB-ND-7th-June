const mongoose = require('mongoose');
const Products = require("./models/Products");
require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8","8.8.4.4"])

const coonectDB = require("./config/db");
coonectDB()

let dummyData = [
    {
        name: 'Laptop',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        price: 200,
        desc: 'a portable personal computer that combines a screen, keyboard, touchpad, processor, memory, and battery into a single folding clamshell unit'
    },
    {
        name: 'Drone',
        image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        price: 70,
        desc: 'a portable personal computer that combines a screen, keyboard, touchpad, processor, memory, and battery into a single folding clamshell unit'
    },
    {
        name: 'Phone',
        image: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        price: 100,
        desc: 'a portable personal computer that combines a screen, keyboard, touchpad, processor, memory, and battery into a single folding clamshell unit'
    }
]

Products.create(dummyData)
    .then(()=>{console.log('Product seeded!')})