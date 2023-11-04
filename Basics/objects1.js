//jab bhi constructor se kuchh banaayenge to singleton banega
//object literal

//yeh do tareeke hain
//Object.create() //yahi hai constructor method...isi mei singleton banta hai
const humaara_user={
    my_name:"Aman",
    age:22,
    email:"amanchahar175@gmail.com",
    lastOnline:["sunday","monday"]
} //yahi hai object literal
//object ke elements ko access karne ke 2 tareeke hain.. ek to dot use karke ek square bracket use karke

console.log(humaara_user.my_name)
console.log(humaara_user["my_name"]) //yeh dono same cheez print karenge but behind the scenes my_name string ki tarah rakha gaya hai isliye [] inke andar humne string format mei daala hai my_name... 
//[ ] yeh waala tareeka zyada better hai kyun ki isme hum object ke andar kuchh bhi access kar sakte hain like ki agar yeh case dekhu main,
const anotherUser={
    name:"Anjali",
    "full name":"Anjali Chahar"
}
//there is no chance ki main "full name" ko access kar loon . ke through
console.log(anotherUser["full name"])
//agar maan lo mujhe symbol use karna ho to?
const mySymbol=Symbol("Button1") //yeh maine ek symbol bana diya
const ekAurUser={
    name:"xyz",
    mySymbol:"MyButton1"
}
console.log(typeof ekAurUser.mySymbol)
//but agar main aise use karunga to mySymbol ka datatype aayega string...hence agar mujhe symbol ko symbol ki tarah hi rakhna hai to I have to define liek this,
const ekAurUser1={
    name:"xyz",
    [mySymbol]:"MyButton1"
}
console.log(ekAurUser1[mySymbol])
console.log(typeof ekAurUser1[mySymbol]) //ofcourse mySymbol ke andar string hai but here hum aise define karke isko use symbol ki tarah hi kar rahe hain



//I have to change the value of my_name in humaara_user then,
humaara_user.my_name="Aman Chahar"
console.log(humaara_user["my_name"])
//maan lo mujhe yahi value freeze kar deni hai jiss se ki kuchh change hi na ho paaye to I will do this,

//Object.freeze(humaara_user) //iske baad koi bhi change nahin aayega humaara_user mei ..agar hum change karna chaahenge to error nahin aayega but change nahin hoga...

console.log(humaara_user)
console.log(ekAurUser1)


//mujhe function use karna hai object mei to... 
humaara_user.greetings=function(){
    console.log("Hello bhai!")
}
humaara_user.greetings()
humaara_user.greetingsOne=function(){
    console.log(`Hello ${this.my_name} bhai!`) //pehli baat to yeh ki yahaan maine string interpolation use kiya hai jaisa ki yaad aa hi gaya hoga tujhe and dusra yeh ki 'this' isliye use kiya kyun ki yeh mujhe uss object ke andar ki keys ko access karne mei madad karta hai... 
}
humaara_user.greetingsOne()