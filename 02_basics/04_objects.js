const tinderuser = new Object()//==const tinderuser ={}
tinderuser.id = "12334"
tinderuser.name = "sammy"

tinderuser.isloggedin = false
//console.log(tinderuser);

const regularuser = {
    email: "ashusd@yad.com",
    fullname1: {
        userfullname: "hitesh", lastname: "yadav"
    }
}
//console.log(regularuser.fullname1.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}

//console.log(obj3);
//console.log(tinderuser);

//console.log(Object.keys(tinderuser));

//console.log(Object.values(tinderuser));
//console.log(Object.entries(tinderuser));
//console.log(tinderuser.hasOwnProperty('isloggedin'));

const course = {
    coursename: "js in hindi",price: "999",constructer: "hitesh"
}

//course.constructer
const {constructer} = course

console.log(constructer);

//de_structring
const navbar = ({company})=> {

}
navbar(company = "hitesh")

//json//

//{
//    "name": "hitesh",
//    "coursename": "js in hindi"
//    "price": "00.0"
//}