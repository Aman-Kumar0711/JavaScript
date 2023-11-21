//for-of to kaam nahin kara objects ke liye isliye for-in loop padhenge...yeh objects ke iterations mei kaam aata hai, isko aur jagah bhi use kar sakte hain ofc but objects ka iteration bhi ho jaata hai iss se
const myObj = {
  js: "JavaScript",
  rb: "Ruby",
  cpp: "C++",
  py: "Python",
};
for (const key in myObj) {
  console.log(key); //iss se object ki keys print ho jaayengi
}
for (const key in myObj) {
  console.log(myObj[key]); //iss se object ki value print ho jaayengi
}
for (const key in myObj) {
  console.log(`shortcut for ${myObj[key]} is ${key}`);
}

//array mei iss loop ko kaise usekarenge??
//dekho itna to samajh aa gaya hai ki yeh loop keys per kaam karta hai and as you know ki arrays mei key hote hain index of elements to access karne ke liye we will do arrayName[key]

const myArr = ["python", "javaScript", "C++"];
for (const key in myArr) {
  console.log(myArr[key]);
}
const someString = "Aur bhai kya haal chaal";
for (const key in someString) {
  console.log(someString[key]);
}
//haan per iss loop se maps iterable nahin hain
