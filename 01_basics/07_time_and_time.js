//dates

let mydate = new Date()
//console.log(mydate.toString());
//console.log(mydate.getDate());
//console.log(mydate.toDateString());
//console.log(typeof mydate);

let newdate = new Date(2026-2-4-4-9)
console.log(newdate.toDateString());
console.log(newdate.toLocaleString());
console.log(Math.floor(Date.now()));

let newdate2 = new Date()
console.log(newdate2);
console.log(newdate2.getDate());
console.log(newdate2.getDay());

let newdate3 =newdate.toLocaleString('default', {weekday: "long",})
console.log(newdate3);
