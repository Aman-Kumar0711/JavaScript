//kuchh values to aisi hoti hain jo strictly true ya false hoti hain per kuchh values hum maan lete hain ki yeh to true ya false hongi hi unko kehte hain truthy and falsy values respectively.

//falsy values:
// false, 0,-0, BigInt 0n, "", NaN, null, undefined

//truthy values:
//"0",'false',[],{},function(){}," "
//to basically string ke andar kuchh bhi hai woh truthy value hogi bhale hi uske andar false ya space bar hi kyun na ho
//empty object , empty array and empty function bhi truthy values hote hain

//to fir main check kaise karu ki array ya object empty hai?
const userEmail = [];
if (userEmail.length === 0) console.log("Array is empty");
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) console.log("Object is empty"); //Object.keys(emptyObj) yeh emptyObj naam ke object ki saari keys ko ek array mei daal dega then hum uss array ki length check kar lenge simple...

//kuchh baatein jo interview perspective se dhyaan rakhna,

// false==0 will return true
// false=='' will return true
// 0=='' will return true

//ek naaye operator ki baat karte hain and uska naam hai, Nullish Coalescing Operator(??) : iska kaam hai null and undefined values ki safety check karna

//kabhi kabhi aisa hota hai ki database se jab values call karte hain to woh null ya undefined value aa sakti hai to uss case mei baaki cheezein na gadbadaayein uske liye isko use karte hain let's see how it works,

let val1;
val1 = 5 ?? 10;
console.log(val1); //abhi dono values well defined hain to pehli waali assign ho jaayegi val1 ko
val1 = null ?? 10;
console.log(val1); //ab val1 ko assign hogi 10 value
//yeh basically iske liye hai ki agar maan lo koi value aa rahi hai database se to agar woh well defined hai to usko wahi rehne do otherwise usko null ya undefined set kar do simple, jiss se baad mei kuchh dikkat na ho
val1 = undefined ?? 15;
console.log(val1);
val1 = undefined ?? 10 ?? 15;
console.log(val1);

//Terniary Operator
//syntax: condition ? true:false
//eg
const price = 100;
price >= 80
  ? console.log("Price more than 80")
  : console.log("Price less than 80");
//yeh to padh rakha hai c++ mei
