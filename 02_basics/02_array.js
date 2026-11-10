const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

const another_arr = [4,3,5,7,8,[1,[1,2,3,4],9,7]]

const real_another_arr = another_arr.flat(Infinity)

console.log(real_another_arr);
console.log(Array.from("ashu"));

console.log(Array.from({name:"ashu"}));
