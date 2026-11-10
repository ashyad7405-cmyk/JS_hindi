function saymyname(){


console.log("A");
console.log("S");
console.log("H");
console.log("U");

}

//saymyname()

function ADDTWONUMBERS(num1,num2){
   //console.log( num1+num2);
   return num1 +num2
}
const result = ADDTWONUMBERS(4,5)
//console.log("result:",result);

function loginuser(username){
    return `${username} just logged in`
}
a = loginuser("ashutosh yadav")
//console.log(a);


function calculatecartprice(val1,val2,...num1){
     return val1,val2,num1

}
//console.log(calculatecartprice(200,400,500,700,900,566));
const user = {
    username: "ashutosh",
    price: 200
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)