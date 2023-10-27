//string 2 type ki hoti hai...ek to normal string ek String object
//saare operations hum string object per karte hain...
let myName1="Aman"
console.log(typeof(myName1))
let anotherName=new String("Aman") //since this is an object so isme elements key value pair mei aayenge...hence hum key use karke value access kar sakte hain and vice-versa
console.log(typeof(anotherName))
console.log(anotherName)
console.log(anotherName[0]) //iss se key 0 ke saath jo value hogi, here it is A woh print hoga...
console.log(anotherName.length)
console.log(anotherName.toUpperCase())
console.log(anotherName.toLocaleUpperCase())
// The toLocaleUpperCase() method converts a string to uppercase letters, using current locale.The locale is based on the language settings of the browser.The toLocaleUpperCase() method does not change the original string.The toLocaleUpperCase() returns the same result as toUpperCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).

//some more functions related to string...

console.log(anotherName.charAt(2))
console.log(anotherName.indexOf('a')) //mere naam mei 2 a hain but yeh doosre waale 'a' ka index return karega...
let name="alpha-helix"
let anotherString =name.substring(0,4) //iska matlab hai ki 0 to 4-1 tak jo bhi hissa hoga name string ka woh anotherString mei aa jaayega...
console.log(anotherString)
//yahi kaam karne ka ek aur function hai and that is slice, usme yeh faayda hota hai ki hum usme negative index bhi daal sakte hain...
let anotherString1=name.slice(-11,-4)
console.log(anotherString1)
console.log(name.replace('-','HeyBaby')) //iss se - replace kar diya  maine HeyBaby se...
console.log(name.includes('alpha')) //this will return true if alpha is present in name...



//ek function aur hai bahut kaam hai woh hai split, yeh function humaara string ko jo hum argument pass karenge uske hisaab se split kar dega, let's see how...
console.log(name.split('-'))

let naam="      Aman"
//ek fxn hota hai "trim" iski help se saare whitespaces hatt jaate hain...yeh new lines bhi hata deta hai
console.log(naam)
console.log(naam.trim())




//jab humko strings concatenate karni hoti hain tab hum woh outdated tareeka na use karke String Interpolation use karte hain, isme placeholders banaaye jaate hain variable ke liye and then wahi value un places per insert ho jaati hai
//let me show you how it is done... ${}
let meraNaam="Aman"
let meriAge=22
console.log(`Hello My name is ${meraNaam} and my age is ${meriAge}`);