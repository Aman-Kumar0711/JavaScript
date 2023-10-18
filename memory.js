//JS mei memory allocation 2 type se hota hai ek to stack mei ek heap mei...
//jo bhi hum variable declare karte hain and Primitive Dtypes hote hain woh sab stack mei jaate hain matlab yeh ki agar mujhe unko call karna hoga to call by value hoga that is ki copy jaayegi ek variable ki dusre mei ...
//per Non-Primitive waale jaate hain heap mei ,isme seedhe reference milta hai memory ka matlab ki agar main kisi mei kuchh change karunga to woh original mei bhi change hoga simple...

let nameOne="Aman"
let nameTwo=nameOne
nameTwo="Alpha"
console.log(nameOne)
console.log(nameTwo) //iske output mei hum dekhenge ki Alpha aayega per nameOne abhi bhi Aman hi hoga

//ab ek non-primitive waale ka example le lete hain
let userOne={
    nameofuser:"Aman",
    emailofUser:"aman@gmail.com"
}
userTwo=userOne //yahaan maine let isliye nahin likha kyun ki mujhe check karna tha ki let likhe bina bhi sahi hoga ki nahi..so sahi hai kyun ki dynamic language hai na JS
console.log(userOne.nameofuser)
console.log(userTwo.nameofuser)
console.log(typeof(userTwo))
userTwo.nameofuser="Alpha"
//iss se sirf userTwo ka hi nahin balki userOne ka bhi naam change ho jaayega kyun ki memory mei same jagah point kar rahe hain dono...

console.log(userOne.nameofuser)
console.log(userTwo.nameofuser)