//array

const myarr = [1,2,3,4,5,6,7,true,"ashu"]
console.log(myarr[0]);

const myheros = ["shaktiman","spiderman"]
console.log(myheros[1]);

//array methods

myarr.push(6,9,10)
//console.log(myarr);
myarr.pop()
//console.log(myarr);
myarr.unshift(9)
//console.log(myarr);
myarr.shift()
//console.log(myarr);

console.log("A",myarr);

const my1 = myarr.slice(1,3)
console.log(my1);

console.log("B",myarr);

const my2 = myarr.splice(1,3)
console.log("C",myarr);
console.log(my2);
