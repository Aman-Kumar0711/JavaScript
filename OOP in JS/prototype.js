//ab solely baat karte hain prototype ki...
// let myName = "hitesh     "
// let mychannel = "chai     "
//mujhe jaan na hai ki iss string ki length kya hai without whitespaces...and mujhe trim keyword use nahin karna hai I want to define a keyword named trueLength jo ki har string ke liye yahi kaam karke de to kya main aisa kar sakta hoon? Let's see...

// console.log(myName.trueLength);

//mere paas koi aisi property nahi hai abhi koi trueLength naam ki

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
//main ek function add karne jaa rha hoon hitesh naam ka  Object ke prototype mei...to jaisa ki humko pta hai ki saari cheezein object hi hain to agar maine object mei yeh fxn daal diya to woh har jagah bydefault pahoch jaayega...

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
}; //yahaan maine array ke prototype mei daala hai heyHitesh naam ka function/method to obvious si baat hai maine child mei property inject ki hai to woh parent mei nahin jaayegi..to yeh sirf array ke liye hi seemit rahega haan per saare arrays ke liye...

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, //iss se TASupport saari properties access kar paayeag Teaching support ki...yeh maine TASupport ke andar hi define kar diya hai main baahar bhi define kar sakta hoon...
};

Teacher.__proto__ = User; //iss se teacher saari properties access kar paayega User ki

//isi ko kehte hain prototypal inheritence

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher); //setPrototypeOf se pehle waala comma ke baad waale ki properties access kar sakta hai...

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength(); //anotherUsername ke andar ChaiAurCode hai to this keyword reference dega ChaiAurCode ka
"hitesh".trueLength();
"iceTea".trueLength();

//so finally maine truelength naam ka ek method bana liya hai jo ki mujhe kisi bhi string ki length de dega without whitespaces
