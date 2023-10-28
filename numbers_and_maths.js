//isme hum baat karenge number and maths ki related to JS...

//number ko main 2 tareeke se define kar sakta hoon... ek to seedha main kuchh variable ya const mei koi number put kar doon to JS will automatically detect that it is of type NUMBER ...ek main as an object define karu 'new' use karke...
const myAge=22
console.log(typeof(myAge))
let myHeight_cm=new Number(180) //maine yeh specifically bata diya hai ki yeh number hi hoga and iska type hai Object...
console.log(typeof(myHeight_cm))

//ab kuchh operations ki baat kar lete hain jo Numbers se linked hain...
let myAge_string=myAge.toString() //this will convert number into string fir hum string ke saare opertions ispe use kar sakte hain...
console.log(typeof(myAge_string))

console.log(myAge.toFixed(2)) //decimal ke baad 2 digit tak hi hoga number(this is not round off btw)...

let someNumber= 23.89673
console.log(someNumber.toPrecision(3)) //iska matlab hai ki 3 digits aayengi bas number ki..basically round off hi kiya jaa rha hai 3 digits tak
let someNumber1= 123.89673
console.log(someNumber1.toPrecision(3)) //btw toPrecision will return a string as output

let someNumber2= 1123.89673
console.log(someNumber2.toPrecision(3))

//ek number mei maan lo bahut se zeros hain aur unko mujhe readable format mei likhna hai matlab ki 100000 ko 1,00,000 aise likhna hai to main yeh ise karunga..
let currency=100000
console.log(currency.toLocaleString()) //but iss se by default american standard aayega agar humko apne Indian standard mei dekhni hai to yeh karenge.. 
console.log(currency.toLocaleString('en-IN'))

//---------------------MATHS----------------------------------
//by default ek library hoti hai JS ke andar usko hum Math. se access kar sakte hain
console.log(Math.abs(-4))
console.log(Math.round(4.5))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))
console.log(Math.min(6,7,8))
console.log(Math.max(6,7,8))

//sabse zaruri hota hai Math.random() fxn...yeh humko deta hai koi bhi random number 0 se 1 ke beech
console.log(Math.random())
//if I have to make sure that the number is always greater than zero then,
console.log((Math.random())*10 +1)
//isme floor ya ceil laga dunga to mere paas sirf integer form mei bhi aa jaayega ans
console.log(Math.floor((Math.random())*10 +1))

//agar mujhe min and max number ke beech hi koi number chahiye to ? then I will do this,
let min=1
let max=6 //kind off dice game waala scenerio samajh lo
console.log(Math.floor((Math.random())*(max-min+1)+min))



