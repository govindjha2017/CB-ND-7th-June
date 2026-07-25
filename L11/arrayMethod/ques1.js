const users = [
  {
    name: "Alice",
    orders: [
      { amount: 100, status: "delivered" },
      { amount: 50, status: "pending" },
      { amount: 200, status: "delivered" }
    ]
  },
  {
    name: "Bob",
    orders: [
      { amount: 120, status: "cancelled" },
      { amount: 80, status: "delivered" }
    ]
  }
];

// You have an array of user objects. Each user has a name and an array of 
// orders (with amount and status). Return a new array of users, keeping 
// only the "delivered" orders, and calculating the total delivered amount
//  for each user.

// [
//   { name: "Alice", deliveredOrders: 2, totalDelivered: 300 },
//   { name: "Bob", deliveredOrders: 1, totalDelivered: 80 }
// ]

let ans = users.map((item)=>{
    let deliverdOrdes = item.orders.filter((x)=>{
        if(x.status=="delivered"){
            return true;
        }
    })

    let totalPrice = deliverdOrdes.reduce((acc,y)=>{
        acc=acc+y.amount;
        return acc;
    },0)

    let obj = {
        name: item.name,
        deliveredOrders : deliverdOrdes.length,
        totalDelivered: totalPrice
    }
    return obj;
})

console.log(ans);