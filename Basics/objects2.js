//isme baat karenge singleton kaise declare karein object ko... 
const user=new Object()
console.log(user)
//this is same as,
const user_one={}
console.log(user_one)
user_one.name="Aman"
user_one.uid=2100521520009
console.log(user_one)
//hum object ke andar bhi object declare kar sakte hain... 
const regularUser={
    email:"amanchahar175@gmail.com",
    full_name:{
        first_name:"Aman",
        last_name:"Chahar"
    },
    gender:"male"
}
console.log(regularUser)
console.log() //iss se ek new empty line print ho jaayegi,aise hi man kiya to kar rha hoon... 
console.log(regularUser.full_name)
console.log(regularUser.full_name.first_name)

//ab hum dekhenge ek object mei dusra object kaise add karein... 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj={obj1,obj2} //agar main yeh karta hoon to iss se wahi dikkat aayegi ki object ke andar objects as single elements aa jaayenge 
//to isko door karne ke liye we use .assign()
const obj_combined=Object.assign(obj1,obj2)
console.log(obj_combined)
//dekho assign() ka format aisa hota hai ki pehla waale object mei baaki saare objects copy hote hain like (a,b) likhunga to a mei b copy ho rha hoga (a,b,c) likhunga to a mei b and c copy ho rahe honge, hence hum zyada achha visually presentable and sense making banaane ke liye yeh format use karte hain jo neeche diya gaya hai,
const obj_combined_new=Object.assign({},obj1,obj2) //yeh bata rha hai ki empty object mei humne obj1 and obj2 daal diye fir uss se overall ek object hi return ho rha hai jo ki obj_combined_new hai... 
console.log(obj_combined_new)

///but hum yeh bhi kam hi use kiya karenge, sabse zyada we will use spread operator
const obj_formed_by_spreading={...obj1,...obj2}
console.log(obj_formed_by_spreading)

//ek general baat yeh hai ki bahut baar aisa hoga ki jab hum database se data le rahe honge to woh array ke andar multiple objects ki form mei aayega hence hum usko access karne ke liye ya to loop laga sakte hain agar ek range tak access karna hai ya fir aisa kar sakte hain ki array[index].object_ki_kaunsi_key_ka_data_chahiye... 

//chalo kuchh aur cheezein dekh lete hain
//agar mujhe kisi object ki saari keys ko access karna hai to?
console.log(Object.keys(user_one)) //yeh ek array mei store karke dega saari keys(remember this)
console.log(Object.values(user_one))
console.log(Object.entries(user_one)) //yeh object ki har entry ko array form mei dega
//agar mujhe check karna ho ki mere object mei koi specific key hai ya nahin to?
console.log(user_one.hasOwnProperty("uid"))
console.log(user_one.hasOwnProperty("age"))
