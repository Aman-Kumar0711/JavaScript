//JS ka basic behaviour hai prototypal basically JS is a prototype language...iska matlab basically yeh hua ki JS jaldi haar nahin maanti hai which means ki maano isko koi cheez dhundhni hai and woh ek layer mei nahin mili to woh uske upar waali layer per jaake usko dhundhti hai then uske upar waali layer and so on jab tak null na aa jaaye...isi ko hum prototypal inheritence bhi kehte hain...yahi hai JS ka basic behaviour isi wajah se humko this,new jaise keywords and classes wagerah ka access milta hai...

//ek aur cheez yeh ki JS mei jo bhi cheez hain bhale hi woh array ho ya string sab Ojbect hi hai...jo properties object ke paas available hain wahi inke paas hongi, woh baat alag hai ki kaunsi usable hai kaunsi nahin...and prototype mei array ka further ek object prototype aa raha tha uske baad as such koi prototype nahin aaya kyun ki object ka reference null hota hai...

//yahaan tak ki function bhi ek object hi hai...function ek function ki tarah to behave karta hi hai but usko object ki tarah bhi behave karwa sakte hain

function multiplyByFive(num) {
  return num * 5;
}
multiplyByFive.power = 2;
console.log(multiplyByFive(5));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++; //this isliye use kara kiss se yeh samajh aa sake ki jiski baat ho rahi hai usi ka score increase karna hai
};
createUser.prototype.printMe = function () {
  //zaruri nahin har baar .prototype likhein hi, woh bydefault maan liya jaata hai...
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);

chai.printMe(); //bina new ke samajh hi nahin paayega system ki kaunse user ki baat ho rahi hai basically kiske liye printMe() call karna hai! kyun ki bhai maine bataaya hi nahin hai chai naam ke variable ko ki usme maine createUser mei additional properties daal rakhi hain increment and printMe naam ki ...unko bataane ka kaam karega new...

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
