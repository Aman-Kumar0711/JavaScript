class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    //this is a method
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  //extends is like .prototype mei jo karte thhe ,bas syntactical sugering kar di hai
  constructor(username, email, password) {
    super(username); //now come to this line...woh jo humne call waale lecture mei dekha tha ki dikkat ho jaati hai jab function ke andar function ho to kis context ko refer kare 'this'...usme jo humne solution nikaala tha wahi sab karta hai behind the scenes yeh 'super' keyword...
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.logMe();
const masalaChai = new User("masalaChai");

masalaChai.logMe();

console.log(chai instanceof User); //chai maine banaaya hai Teacher se and Teacher extend kar rha hai User ko to chai naam ka const uska instance hoga hi na ...hence chai is instance of User...
