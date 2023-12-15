//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

// A promise is said to be settled if it is either fulfilled or rejected, but not pending.

//chalo promises banaate hain...fir dekhenge unka consumption
const promiseOne = new Promise(function (resolve, reject) {
  //do an async task
  //Database calls
  //cryptography
  //resolve and reject isliye use kare jiss se main bata saku ki agar yeh resolve ho rha hai to kaise consumption hona hai promise ka , uske liye we will use .then keyword...basically baat yeh hai ki if my promise is resolved then do this ...simple
  setTimeout(function () {
    console.log("Async task completed");
    resolve();
  }, 1000);
}); //iske andar humko dena hota hai ek callback function jiske andar 2 parameters hote hain one is resolve and other is reject...
promiseOne.then(function () {
  console.log("Promised Consumed");
}); //then ke andar bhi callback function hota hai jo bataata hai ki agar resolve ho jaaye promise to kya karna hai

//yeh jo humne 2 steps mei kara usko ek step mei bhi kar sakte hain
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task completed again.");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise consumed again.");
});

//ab dekho promise poora hone ke baad mujhe answer uske consumption se hi milta hai and woh hota hai resolve ke through tabhi to then use karte hain...haan per har baar aise khud ka data thode hi denge, Database se values aa rahi hongi and unpe kaam karna padd sakta hai to woh hum pass karte hain resolve mei hi....hum waise pass to kuchh bhi kar sakte hain resolve mei but hum mainly object pass karte hain...aaiye dekhte hain
//jo main resolve ke andar parameter pass karta hoon woh automatically mera then ke callback function mei aa jaayega same
const promiseThree = new Promise(function (res, reject) {
  setTimeout(function () {
    console.log("Async task three");
    res({ name: "Aman", username: "Aman_0711" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

//agar reject hota hai promise to main reject() ke andar jo pass karungawahi mera catch ke callback function mei jaayega...btw we use catch() in case of rejection...jaise resolve ke case mei then use karte hain waise hi...

//ek bahut zaruri baat, agar mujhe kuchh return karaana hai then ke andar se to woh main normally uss then ke output ko kisi variable mei store kara ke nahin kar sakta...uski jo return value hogi woh main ek aur then mei daalunga fir usko print kara sakta hoon...isko bolte hain chaining...yeh bahut zaruri hai

const promiseFour = new Promise(function (res, rej) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      res({ username: "Aman_0711", id: "amanchahar175@gmail.com" });
    } else {
      rej("Error:Something went wrong"); //yahi reject ke andar jo maine diya hai woh catch ke callback function ka argument ban jaayega...
    }
  }, 1000);
});

//maan lo mujhe promise resolve hone per username print karaana hai to main .username ko return karke seedhe kisi variable mei store nahin kar sakta I have to use another .then()
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error_message) {
    console.log(error_message);
  })
  .finally(() => console.log("The promise is either resolved or rejected."));

//achha iske saath hum .finally() bhi use karte hain...kyun ki bhai ya to promise resolve hoga ya reject per kuchh na kuchh to hoga hi na ...wahi sab bataane ke liye finally hota hai

//zaruri nahin main promises ko .then() ya .catch() se hi handle karu...as promise future mei hone waali activity hai to I can use async and await ...basically ki thodi der wait kar lo promise ke poora hone ka , agar ho jaaye to badhiya warna aage badho...isme catch nahin karte error ko...khair dono hi sahi hain apni jagah...

//async await ke case mei bhi agar error aaye to usko hum try catch use karke gracefully handle kar sakte hain
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ course: "JavaScript", courseId: "JS" });
    } else {
      reject("Error:JS couese rejection");
    }
  }, 1000);
});
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    //catch  yeh .then() ke saath jo use kiya tha wahi waala hai to iske andar jo argument hoga woh wahi aayega jo wahaan reject mei pass kiya hai...
    console.log(error);
  }
}
consumePromiseFive();

//thoda aur dekhte hain...

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//fetch basically data fetch karke laata hai kisi URL se...but fetch ka return type ek promise hota hai...

//         const data = await response.json() //initially data mujhe string form mei milta hai to usko JSON mei convert kar rha hoon main and that will also take time hence we have used await here too...
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

//isi ko .then() .catch() ki madad se karke dekhte hain

fetch("https://api.github.com/users/hiteshchoudhary")
  //this will return a promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //yeh upar waale then ke return ko handle karne ke liye hai
    console.log(data);
  })
  .catch((error) => console.log(error));
