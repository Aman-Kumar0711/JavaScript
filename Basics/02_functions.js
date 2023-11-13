//ab thodi aur baat karenge functions ke baare mei...
//maan lo kabhi jab shopping cart ki site bana rahe honge to humko to pta nahin hai kitne items khareedega user to hum sum kaise bataayenge?
//iske liye we use rest operator (...) syntax wise yeh spread operator jaisa hi hai
function itemsInCart(...num){
    return num;
}
console.log(itemsInCart(200,300,400,500))
//agar main itemsInCart ko aise define karte ki usme arguments hote (val1,val2,...num) and andar ka content same rehne deta to val1 ko 200 mil jaata val2 ko 300 and 400,500 chale jaate num mei...


//ab fxn ke andar object leke dekhte hain... 
const user={
    name:"Aman",
    age:22
}
function handleObject(anyObject){
    console.log(`Name of the user is ${user.name} and age of the user is ${user.age}`)
}
handleObject(user)
//zaruri nahin main aise hi argument pass karu...main seedhe function ke argument mei hi define kar sakta hoon object ko like this,
handleObject({
    username:"Aman",
    userAge:22
})
