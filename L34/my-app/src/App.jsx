import React from 'react'
import Card from './Card'

let products = [
    {
        name:'laptop',
        price:100,
        rating:4.3
    },
    {
        name:'phone',
        price:70,
        rating:4.1
    },
    {
        name:'drone',
        price:75,
        rating:3.5
    }
]

const App = () => {
  return (
    <div>
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/> */}

        {/* {Card(products[0])}
        {Card(products[1])}
        {Card(products[2])} */}

        {/* <Card product={products[0]}/>
        <Card product={products[1]}/>
        <Card product={products[2]}/> */}

        {products.map((item)=>{
            return <Card product={item}/>
        })}

    </div>
  )
}

export default App