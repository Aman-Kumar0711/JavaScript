//getter_setter.js waali file mei humne naya syntax dekha tha ab hum isme dekhenge puraana syntax, basically kaise hum properties ke through get set jaisa kaam kar sakte hain...
//pehle to classes wagerah hoti nahin thi'n function/object hote thhe...

function User(email, password) {
  //function also act as object, yaad hai na ki everything is object in JS to usi ki properties ko lagaayenge...
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    //yeh defineProperty hi getter-setter ka kaam karti hai...

    //define property ka syntax hota hai Object.defineProperty(this, object ki kis property ko define karna hai khud ke according(basically override kaunsi property ko karna chahte ho?), another object jo usko mere man chaahe tareeke se define karke dega)
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("chai@chai.com", "chai");

console.log(chai.email);
