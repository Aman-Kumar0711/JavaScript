// jab function aaya to uska ek execution context hoga fir maine uske andar ek aur function call kar liya uska alag execution context hoga...to agar main this keyword use karunga to woh kiske execution conext ko refer karega? kyun ki parent to original function hai na ki callme() [jo idhar given hai,image mei]...
// to aise scenerio mei yeh this refer karta hai global execution context ko ...but uski dikkat yeh hai ki browser waale scene mei to woh window object ko refer karta hai but node version mei it refers to empty object...

function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); //call use nahin karunga to reference hold nahin ho paayega SetUsername ka ...kyun ki woh to apna console.log() waali line execute karke over ho jaayega usi ke saath uska exec context over ho jaayega jisme ki sabhi variables honge..to fir kaise hoga createUser mei SetUsername access...hence call use kiya....this isliye likhte hain kyun ki call karne ke baad mujhe Setusername ke context mei change thode hi karne hain mujhe to createUSername ke context mei changes karne hain to uska this dena padega na....

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
