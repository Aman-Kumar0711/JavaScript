//Thode aur operations ki baat karenge hum isme
//agar mere paas 2 arrays hain to main maan lo ek array ko dusre mei push krta hoon to woh waala array as a single element jaayega dusre array mei jisme push kiya hai 
const marvelHeros=["Captain America","Thor","Iron Man"]
const dcHeros=["Batman","Superman","Wonder Woman"]
//const heros=marvelHeros.push(dcHeros) //iss se marvelHeros mei dcHeros ke saare elements as a single array store ho jaayenge... 
//console.log(marvelHeros)

//per agar mujhe dono elements alag alag hoke chahiye like sab ek hi array mei ho dono ke elements seperated by comma to...

const all_heros=marvelHeros.concat(dcHeros)
console.log(all_heros)

//per iski jagah hum ek aur cheez use karte hain and woh zyada commonly use hoti hai woh hai spread...

const new_all_Heros=[...marvelHeros,...dcHeros]
console.log(new_all_Heros)


//maan lo kabhi aisa hota hai ki array ke andar array then uske andar bhi array aa rakhe ho to unko alag alag kaise likhein like ki [1,2[3,4]] ko [1,2,3,4] likhna hai...for this we will use flat function...
const randomArray=[1,2,[3,4],[5,6,[7,8]]] //iski depth 2 hai to hum 2 depth tak flat kar sakte hain but on a safe side ya jab humko depth ka idea na ho to depth likh do infinity... 
console.log(randomArray.flat(Infinity))

//mujhe check karna hai ki koi cheez array hai ki nahin to
console.log(Array.isArray("Aman"))
//maan lo mujhe "Aman" ko array banaana hai to
console.log(Array.from("Aman"))
//maan lo main ek object du isme to usme key value pair hota hai to agar main usko array banaaunga to mujhe bataana padega ki keys ka array banaana hai ya values ka warna to ek empty array return kara dega yeh... 
console.log(Array.from({name:"Aman"}))

//agar mujhe bahut saare variables ya constants ka array banaan hai to I will use 'of' function
const marks1=100
const marks2=200
const marks3=300
console.log(Array.of(marks1,marks2,marks3))