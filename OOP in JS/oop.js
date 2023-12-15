//this keyword tab use karte hain jab current context ki baat karni ho
const user = {
  username: "Aman",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username; //LHS waali cheez variable hai...this. karke hi likhte hain , bahut baar dekhne ko mileaga yeh
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; //iss se kisi bhi cheez ko access kar sakta hai koi bhi banda kyun ki saari cheez passon kar di return this karke...waise yeh implicitly define hota hi hai to mujhe alag se return karne ki zarurat nahin hai...
}
//new keyword ek constructor function hai which means ki hum ek hi object se multiple instances bana sakte hain...
const userOne = new User("Aman", 12, true);
const userTwo = new User("ChaiAurCode", 11, false); //new use nahin karunga to userTwo override kar dega values ko userOne mei kyun ki maine sirf User likha hai...new ki help se ek hi User function jo maine 18th line pe define kiya hai uss se multiple users create kar sakta hoon
console.log(userOne.constructor); //iska output aayega function:User...matlab constructor khud ka hi reference deta hai...
//console.log(userTwo);

//Jab new keyword likhte hain to yeh steps follow hote hain:-
//1. ek empty object create hota hai
//2. constructor function call hota hai
//3. this keyword mei saare arguments inject ho jaate hain
//4. fir hum naye instance banaate hain details bhar ke simple...

//The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   const auto = new Car('Honda', 'Accord', 1998);

//   console.log(auto instanceof Car);
//   // Expected output: true

//   console.log(auto instanceof Object);
//   // Expected output: true
