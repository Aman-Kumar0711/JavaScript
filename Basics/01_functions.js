//code ko ek package mei band kardiya hai basically usi ko bolte hain function and jab zarurat ho usko call kar lo
function sayMyName(){
    console.log("Aman")
}
//sayMyName yeh ho gaya reference function ka
sayMyName() //yeh ho gaya execution function ka
function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}
addTwoNumbers(3,4) //abhi humne if-else condition padhi nahin hai warna to humko pehle check karna padega ki dono argument jo humne diye hain woh numbers hi hain na warna js to 3+"4" ko 34 print kar dega


//jab hum function ko define karte hain tab usme jo pass karte hain woh hote hain Parameters and jab hum function call karte hain tab usme mei jo pass karte hain usko kehte hain arguments

// const res=addTwoNumbers(5,6)
// console.log(res) //yeh aayega undefined kyun ki maine function mei bas print karwaaya hai na ki kuchh return kara hai
//so I have to define it like this,
function addTwoNumbers_another(num1,num2){
    return num1+num2
}
const result=addTwoNumbers_another(3,4)
console.log(result)

function welcomeMessage(userName){
    if(!userName){
        return "Please Enter the username"
    }
    return `${userName} just loggedIn`
}
console.log(welcomeMessage()) //maine isme koi argument nahin pass kiya hai iska matlab hai ki userName jo ki parameter hai function mei woh undefined hai hence if waali statement execute hogi
console.log(welcomeMessage("Aman"))

//ek aur solution hai ki hum koi default value de dein userName ki jiss se ki maan lo koi argument pass na ho to humaare paas ek default argument hai uske andar like this, userName="Aman"