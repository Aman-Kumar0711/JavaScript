//isme reduce ke baare mei jaanenge...isme hota kya hai ki 3 terms hoti hain : accumulator, current value and initial value
//chalo ek example se samajhte hain
const numsArr = [1, 2, 3, 4, 5];
let initialValue = 0;
let newNumsArr = numsArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
//achha to isme hoga yeh ki accumulator mei pehle initialValue store hogi fir uske baad usme fxn ka kaam hoga jo ki hai currentValue ko add karna accumlator and currentValue is numsArr ki ek ek karke values..fir dusri cycle mei accumulator mei woh value jaayegi jo fxn ne pehli cycle mei return kari and so on..aur aakhir mei jo value hogi woh return ho jaayegi
//isme bhi wahi hai ki fxn mei scope open karunga to return keyword use karna hoga
console.log(newNumsArr);
newNumsArr = numsArr.reduce((accumulator, currentValue) => {
  console.log(
    `accumulator ki value: ${accumulator} and current value is: ${currentValue}`
  );
  return accumulator + currentValue;
}, initialValue); //main yahaan per bhi directly de sakta hoon initial value, zaruri nahin hai ki upar define karu alag se
console.log(newNumsArr);

const shoppingCart = [
  { courseName: "js", price: 299 },
  { courseName: "py", price: 399 },
];
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
