//Isme hum badi hi intresting cheez per baat karenge...
//Kya JS mei pi ki value 3.14 and so on se hata ke kuchh aur kari jaa sakti hai? Let's see...
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);
//maine Math.PI ki value 5 kar di hai but main print karunga to waapas se answer 3.14... hi aayega, arey per aisa kyun?

//Object ki ek property hoti hai getOwnPropertyDescripter uss se kisi bhi property aa jaati hai to chalo PI ki check karte hain

const descripter = Object.getOwnPropertyDescriptor(Math, "PI"); //Math to object hai,PI hai uski property...to comma se pehle aata hai object uske baad property
console.log(descripter);

//to idhar output side mei Math.PI ki value de rakhi hai and usme writable false kar rakha hai to  main isko change nahin kar sakta...hence PI ki value change nahin ho sakti(kyun ki basic level per in logon ne C++ mei itne checks laga ke rakhe hain ki unko change hi nahin kar sakte hence isko writable nahin bana sakte)

//aise hi main khud ke defined object ki bhi properties dekh sakta hoon and usme changes set kar  sakta hoon accordingly...

const myUser = {
  name: "Aman",
  username: "amanchahar175@gmail.com",
  age: 22,
};
console.log(Object.getOwnPropertyDescriptor(myUser, "name"));

//chalo iski properties ko change karte hain...

Object.defineProperty(myUser, "name", {
  //writable: false,
  enumerable: false, //iss se yeh waali property iterate nahin hogi
});

console.log(Object.getOwnPropertyDescriptor(myUser, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    //kyun ki koi function hua object ke andar defined to usko thode na print karna hai mujhe to bas key value pair chahiye properties ke

    console.log(`${key} : ${value}`); //to maine myUser ke name waali property ko non-enumerable bana diya hai to woh nahin print hogi
  }
}
