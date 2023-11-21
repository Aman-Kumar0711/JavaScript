//isme kuchh aur loops ki baar karte hain
//1. for of loop
//syntax:
// for (const iterator of object) {
// }
//yahaan pe object ka matlab woh js waala object nahin yeh ek broad category ke roop mei istemaal hua hai like yahaan object ek array bhi ho sakta hai ek string bhi ya ek object bhi ...
const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
  console.log(i); //koi condition lagaane ki zarurat nahin hai na hi array ki length ka zikr karna woh sab apne aap dekh lega
}
const greetings = "Hello";
for (const character of greetings) {
  console.log(character);
}

//ek aur datatype hota hai js ke andar woh hai Maps this is similar to array bas isme key-value pair aata hai(unique ofcourse)
const myMap = new Map();
myMap.set("In", "India");
myMap.set("USA", "United States of America");
myMap.set("GB", "Great Britain");
myMap.set("USA", "London"); //iske baad USA ki value London ho jaayegi instead of United States of America
console.log(myMap);
//jis order mei entry kari hai usi order mei print hongi cheezein
for (const [key, value] of myMap) {
  //[key,value] karke destructuring kar di key-value pair of map ki
  console.log(key, ":-", value);
}
//yeh jo upar waala syntax hai woh maps ke key-value ke liye kaam karega per yeh cheez object per kaam nahin karegi wahaan error aayega "Object is not iterable" (with this method ofc) uska alag tareeka hai
