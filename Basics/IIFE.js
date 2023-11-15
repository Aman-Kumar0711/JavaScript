//IIFE stands for Immediately Invoked Function Expressions
//maan lo kabhi kabhi mujhe koi fxn ek dam program start karte hi chahiye yya global variables koi dikkat na karein tab hum yeh karte hain
//interview mei puchha jaaye to bataana hai ki Global scope ka jo pollution hai usko hataane ke liye use karte hain IIFE
//basically uss fxn ko parenthesis mei band kar dete hain
(function one(){
    //this is named IIFE kyun ki idhar fxn ka naam likh diye hai maine i.e., one
    console.log("Database Connected")
})(); //yeh waale parenthesis isko run karaane ke liye
//ab kya hoga ki mujhe ek aur IIFE banaana hoga to error aayega kyun ki aisa hota hai ki ki JS kabhi kabhi andaaza nahin laga paata ki kahaan khatam hua hai IIFE to yeh clarify karne ke liye hum end mei ek semicolon laga dete hain
(()=>{
    console.log("Another Database Connected")
})();
((name)=>{
    console.log(`Hey ${name}`)

})("Aman");
//last two IIFE's are simple IIFE