//isme destructuring ki baat karenge objects ki
//consider this case,
const course={
    courseName:"JS ki padhaai",
    fees:1000,
    instructor:"xyz"
}
//ab agar mujhe maan lo courseName access karna hai to main normally . ya [] aise kar sakta hoon per yahi kaam mujhe 5-6 baar karna hai to har baar console.log karke usme baar baar dot ya [] kya lagaana, isliye yeh syntax use kar lete hain,
const {courseName}=course //main isme courseName ka naam apne hisaab se bhi de sakta hoon like this, {courseName:CName}
console.log(courseName) //this will return JS ki padhaai
//so basically jahaan bhi yeh {?} waala syntax dikhe to samajh jaana ki destructuring ki jaa rahi hai


//thodi JSON ki baat kar lete hain,yeh basically JS ka object hi hota hai...pehle jab database se files aati thi'n toh woh xml format mei aati thi'n but ab JSON format use karte hain...isme bas yahi hai ki keys and values dono string format mei hoti hain(ofcourse jo numbers hain woh kyun hi honge string format mei) like this,
// {
//     "name":"Aman",
//     "age":22,
//     "roll_no":2100521520009
// }

//well yeh bhi zaruri nahin hai ki humko API's se response  aise JSON format mei hi mile humko woh array format mei bhi mil sakta hai jiske andar bahut saare objects ho to hum uspe bhi aaraam se kaam kar sakte hain... 
//ek site hai JSON formatter isme API ke data ko achhe tareeke se present karke dekh sakte hain jiss se clearly samajh aa jaaye sab


//Note: full form of JSON is JavaScript Object Notation