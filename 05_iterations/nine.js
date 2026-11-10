const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc,curval){

//     console.log(`acc: ${acc} and curval: ${curval}`);
    
//     return acc +curval

// }, acc = 0)
const mytotal = mynums.reduce( (acc, cur)=> acc+cur ,0)
//console.log(mytotal);

const shoppingcart = [
    {
        iteamname: "javascript course",
    price: 2999,
    },
     {
        iteamname: "python course",
    price: 299,
    },
     {
        iteamname: "nodejs course",
    price: 1999,
    },
]
const pricetopay = shoppingcart.reduce( (acc,item)=> acc + item.price,0)
console.log(pricetopay);

console.log(shoppingcart);
