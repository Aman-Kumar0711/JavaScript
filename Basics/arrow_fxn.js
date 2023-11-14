//isme arrow fxn and 'this' keyword ke baare mei jaanenge
//current contxt(current value of variables) ko refer karne ke liye we use 'this' keyword
const userDetails={
    username:"Aman",
    age:22,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the site.`)
        console.log(this)
    }
}
userDetails.welcomeMessage()
//ab main username change karke dekhta hoon
userDetails.username="Anjali"
userDetails.welcomeMessage() 

//agar main yahaan baahar console.log(this) karke dekhunga to aayega empty object kyun ki koi global context hi nahin diya hai abhi...but yahi kaam agar hum kisi search engine mei karenge to wahaan aayega Window object kyun ki bydefault web engines mei global object hota hai window object...iska reason yeh hai ki pehle JS sirf web engines per hi run kari jaa sakti thi per ab uske liye alag alag platforms bana diye hain hence yeh fark aaya...pehle sab search engine per kaam ho rha tha to woh part tha windows ka to global object window aata tha...

//ek baar yeh check kar lete hain ki kya yeh 'this' kaam karega fxns ke saath
function random(){
    let username="Aman"
    console.log(this.username)
}
random() //undefined aayegan answer,matlab ki fxn ke saath kaam nahin kar rha hai yeh this , jaise objec ke mei kar rha tha

//ab baat karenge arrow ki... 
//basic syntax: ()=>{} khatam... ()=>{} isko main kisi variable mei bhi store kar sakta hoon jaise ki const fxn=()=>{} yahi jo parenthesis hain inke andar hum parameters pass kar sakte hain
//implicit fxn bhi hote hain jo ki ek hi line mei define ho jaate hain like ,
const addn=(num1,num2)=> num1+ num2 //yeh samajh jaayega ki num1+num2 return karna hai
console.log(addn(3,4))
//achha ek aur tareeka hai,
const addTwo=(num1,num2)=>(num1+num2+2) //yeh bahut imp baat hai ki agar main parenthesis mei likhta hoon fxn ki return value to mujhe return keyword use karne ki zarurat nahin hai but agar main parenthesis use karunga to I should have to use return keyword...remember this
console.log(addTwo(2,3))
//object ko return karne ke liye parenthesis lagaana hi padega
const returnObject=()=>({username:"Aman"})
console.log(returnObject()) //agar maine upar ewaali line mei parenthesis nahin lagaaya hota to answer aata undefined

