//singleton

//object literals
const mysym = Symbol("key1")
const jsuser = {name:"ashu",fullname:"ashutosh yadav",[mysym]: "mykey1",age:18,location:"vns",email:"asyada@gmail.com"

}

//console.log(jsuser.name)
//console.log(jsuser["email"])
////console.log(jsuser["fullname"])
//console.log(jsuser.mysym)
//console.log(typeof[mysym]);

jsuser.greeting = function(){
    console.log("hello js user");
    
}
jsuser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());
