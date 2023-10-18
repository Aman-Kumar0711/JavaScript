//dekho bhai typescript mei to strict rules hote hain ki tum kinhi do variables ko tabhi compare kar sakte ho jab unka datatype same ho per JS mei aisa  nahin hai woh convert kar deti hai and comparison ka result mil jaata hai

//kuchh to basic comparisons hain jaise 
console.log(2>1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)
console.log(2>=1)
console.log(2<=1)

//kuchh hote hain ajeeb type ke comparisons...

console.log("2">1)
console.log("02">1) 
//inme string waale 2 and 02 dono number mei convert ho jaayenge then comparison ho jaayega

console.log(null>0)
console.log(null==0)
console.log(null>=0)
//equality and comparison ke case mei alag alag kaam hota hai ...comparison(>,<,>=,<=) mei null ko number mei convert kar diya jaata hai and it is treated like 0 per equality(==) ke case mei aisa nahin hota...

//undefined ka comparison har case mei false hi dega output...

//ek hota hai strict check(===) ,isme value ke saath saath datatype bhi check hota hai ...agar dtype same nahin hai to false output dega

console.log("2"===2)