// for of

["","",""]
[{},{},{}]
const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hello, world"
for (const greet of greetings){
    // console.log(`each char is ${greet}`);
    
}

// maps

const map = new Map()
map.set('in', "india")
map.set('aus', "australia")
map.set('jap', "japan")
map.set('us', "usa")
map.set('in', "india")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,"=>", value);
    
}

const myobject = {
    js:"javascript",
    py:"python",
    rb:"ruby",
    swif:"swift by apple"
}
for (const key in myobject) {
    
    // console.log(`${key} shortcut is for ${myobject}`);
    
}

const programming = ["js","rb","py","cpp"]
for (const key in programming) {
//    console.log(`${key} is the shortcut for ${programming}`);
   
}
const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (val){

//     console.log(val);
    
// })

// coding.forEach( (item)=> {
//     console.log(item);
    
// })

// function printme(item){
//     console.log(coding);
    
// }
// coding.forEach(printme)

// coding.forEach( (item, index, arr)=> {
//     console.log(item,index,arr);
    
// })

const mycodeing = [
   {
    languagename: "javascript",
    languagefilename: "js",
   },
   {
    languagename: "java",
    languagefilename: "java",
   },

   {
    languagename: "python",
    languagefilename: "py",
   },

   {
    languagename: "ruby",
    languagefilename: "ruby",
   }]

mycodeing.forEach(item => {
    console.log(item.languagename);
    
});
   