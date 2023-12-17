//yeh sab kuchh ES6 ke baad ki kahaani hai, behind the scenes abhi bhi wahi new and prototype wagerah se kaam ho rha hai...yahaan per hum class ke baare mei padhenge jo ki JS mei syntactical sugar hi hai as such kuchh by default cheez nahin hai yeh JS ki...

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    //maine yahaan function keyword mention nahin kiya, kyun ki class ke andar hain woh khud samajh raha hai sab and here it is known as method...
    return `${this.password}abc`; //just for fun sake
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene yeh ho rha hai,

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
