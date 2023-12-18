//isme hum dekhenge ki object per kaise get set property define kar sakte hain,iss se pehle waali file mei humne function mei get_set define kiya tha...kaam wahi hai idhar bhi bas object hai idhar and wahaan function tha...
const User = {
  _email: "h@hc.com",
  _password: "abc",

  //maine ek property hi bana di hai yeh email naam ki ab bhai iska kaam hai ki yeh kiska reference leke kya kaam kar rahi hai andar bas itna hai ki main something.email likhunga to mere paas yeh jo property hai email naam ki uska output aayega...
  get email() {
    //bhale hi yeh getter and setter jo define kare woh method hain but unko properties ke upar rakh dete hain hum to jo memory se leke aaye cheez and jo de rahe hain user ko usko override karne ka kaam kar rahe hain yeh getter and setter
    return this._email.toUpperCase();
  },
  //basically yeh get waali line ka matlab hai ki main memory se this._email ko leke aao and usko upper case mei convert kar do
  set email(value) {
    this._email = value; //iska matlab hai ki bhai mujhe jo value mili hai usko this._email mei set kar do ..mujhe nahin pta kaise tumne kya define kar rakha hai but set kar do
  },
};
//yahi same cheez ho rahi hoti hai jab hum array ki .length() property ko access karte hain...wahaan yahi getter and setter waali cheez ho rahi hoti hai...jaise hi main get karta hoon length ko to woh array per internally ek loop laga ke counter ki value return kar deta hai...ab samajh aaya!

const tea = Object.create(User); //create ek factory function hai JS object ka...iss line ka matlab hua ki User naam ke object ka reference leke ek Object create kardo and usko store kar do tea mei...agar main sirf Object.create() likh deta to uss se Null object create ho jaata and woh chai mei store ho jaata...
console.log(tea.email);
