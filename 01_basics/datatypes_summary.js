//primitive

//const { use } = require("react");

//7 types : string, number, boolean, null, undefined, symbol, bigint
//const score = 100
//const scorevalue = 40.4

//const isloggedin = false
//const outsidetemp = null

//let useremail;

//const id = Symbol("1234")
//const anotherid = Symbol("1234")
///console.log(id==anotherid);

//const bignumber = 2223456666654323456765n

//reference(non primitive)

//arrat, objects, functions

//const heros = ["shaktiman","spiderman"];
//{
 //   let name = "ashu";
 ////   let age =  34;
//}

//const myfunction = function(){
    //console.log("hello world");
    
//}
//console.log(typeof bignumber);
//console.log(typeof myfunction);
//console.log(typeof heros);
//console.log(typeof outsidetemp);
//console.log(typeof isloggedin);
//console.log(typeof id);

////Memory////
//stack(primitive),heap(non primitive)

let myyoutubename = "ashutoshdotcom"

let anothername = myyoutubename
anothername = "chaiaurcode"
console.log(myyoutubename);
console.log(anothername);

let user = {
   email : "userupid.com",
   upi : "user@ybl"
}

let user1 = user
user1.email = "ashu@gmail.com"


console.log(user.email);
console.log(user1.email);
