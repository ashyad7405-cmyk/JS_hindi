const user = {
    username: "ashu",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

//user.welcomemessage()
//user.username = "samn"
//user.welcomemessage()
//console.log(this);

//function chai(){
  //  let username = "ashu"
    //console.log(this.username);
    
//}
//chai()

// const chai = () => {
//     let user ="ashu"
//     console.log(this);
    
// }
// chai()

// const addtwo = (num1, num2)=>  num1 + num2 this is called implicit and when retirn keyword is used it is called explicit
//const addtwo = (num1, num2)=> ( num1 + num2)
const addtwo = (num1, num2)=> ({username: "ashu"})
console.log(addtwo(3,4));
