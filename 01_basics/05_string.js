const name = "ashu"
const repocount = 23
//console.log(name + repocount +" value");

console.log(`hello my name is ${name} and my ${repocount}`);
const gamename = new String("ashu")

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());
console.log(gamename.indexOf("u"));
console.log(gamename.substring(1,3));
console.log(gamename.slice(1,2));

const newstring2 = "    ashyad "
console.log(newstring2);
console.log(newstring2.trim());

const url = "https://ashyad.com/ashyad%30"

url.replace("%30","&&")
console.log(url);
console.log(url.replace("%30","&&"));
