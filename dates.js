//JS mei abhi ek library per kaam chal rha hai Temporal naam ki uss se dates ki handling kaafi easy and readable ho jaayegi but abhi ke liye humko puraane tareeke se hi dates ke baare mei seekhna padega...

let myDate=new Date(); //hence typeof Date is object
console.log(myDate) 
//ab iss se kya hoga ki bade hi ajeeb se format mei date aayegi, usko readable banaane ke liye hum usko convert karenge like toString, toLocaleString, toDateString etc... 

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON()); //achha matlab originally answer JSON format mei hi aata hai ... 
//month 0 se start hote hain JS mei like 0 means January
let newDate= new Date(2023,0,28) //agar main 28 ke baad 2 parameter aur declare karunga to woh honge hour and min ke , ek aur karunga to woh second bhi bataayega... 
console.log(newDate.toString());

let newDate1= new Date(2023,0,28,6,30,15)
console.log(newDate1.toString())

//maan lo mujhe mm-dd-yyyy format mei karna hai declare to?
let specificFormatDate=new Date("01-28-2023") //mm format mei 01 se shuru hote hain months... 
console.log(specificFormatDate.toString())

//JS mei koi bhi time stamp aise calculate hota hai ki inhone ek standard date maan rakhi hai woh hai shaayad 1 jan 1970 uske baad kisi bhi din tak jitne millisecond hue hain uss standard date se woh count aata hai answer mei... 
let myTimeStamp=Date.now()  //yeh exact abhi ki date tak ke millisecond bataayega... 
console.log(myTimeStamp)

//achha agar mujhe compare karna ho kinhi dates to to main yeh karunga ki uss date tak kitne milli second hue hain woh compare karlunga ... vvv important 

// example
console.log(newDate.getTime()) 

//ab isko agar seconds mei convert karna hai to /1000 kar denge ,but uss se decimal values aa jaayengi to hum floor le lenge... 
console.log(Math.floor((newDate.getTime())/1000))


//agar mujhe date mei specifically month hi jaan na hai to I will use getMonth(), day chahiye to getDay() use karunga and so on... 
console.log(newDate.getMonth()+1) //0 se shuru hota hai na month to humko agar actual month jaan na hai apne hisaab se to +1 kar rahe 
console.log(newDate.getDay())


//localeString ya string waale format mei hum khud se bhi customize kar sakte hain date daye time wagerah dikhaane ke format ko... 
console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))
//here default is international format



