class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    //iss se maine createId naam ke method ki access band kar di bhale hi woh koi instance ho iss User class ka ya child hi ho per koi bhi access nahin kar paayega createId() method ko...
    return `123`;
  }
}

const hitesh = new User("hitesh"); //this is an instance of User class
// console.log(hitesh.createId())

class Teacher extends User {
  //this is child of User class
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());
