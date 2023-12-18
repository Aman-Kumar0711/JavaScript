class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //bahut baar aisa hota hai ki hum class ki kuchh cheezon ka access sabko nahin dena chahte ya kuchh cheezon ko customise karke lautana chahte hain jiss se original cheez kya hai woh pta na chale tab hum getter and setter use karte hain....inke keywords hain get and set respectively...and agar get use kiya hai to humko set use karna hi padega...and inke meaning to naam se hi clear hain...
  //by default jitni bhi hum properties lete hain class mei jaise yahaan email and password hai unke naam ke getters and setters bane hote hain as a method...per mujhe changes karne hain to alag se get set likhke specify karunga
  get email() {
    //iska matlab hai ki koi email get karna chahta hai basically lena chahta hai to main usko return kar rha hoon email in upper case...yeh get set class ke hisaab se nahin object ke perspective se socho tab ek dam jaisa shabd hai waisa hi matlab nikal rha hai
    return this._email.toUpperCase();
  }
  set email(value) {
    //setter maane main class ki kisi property mei yeh cheez set karna chahta hoon...so i am setting value in email...
    this._email = value; //agar maan lo main set karta this.email mei to bhai constructor bhi apna this.email mei set kar rha hai and yeh setter bhi to yeh to race lag jaayegi and aise hi max call stack size exceed ho jaayega...yeh to dikkat ki baat hai isliye humne this._email likha(yahi syntax prefer karte hain log ki underscore laga jo jiss se pehchaan mei aa jaaye...baaki abhi ek proposal diya jaa rha hai ki aisi cheezon ke liye hum aage hash(#) laga diya karein and jaise hi # se shuru ho naam to automatically samajh jaaye JS ki kya baat ho rahi hai yahaan)...same cheez get ke saath hai ki getter bhi this.email mei daal rha hai email and constructor bhi this.email mei value daal rha hai email.toUpperCase...

    //to maine _ laga ke naya naam jo de diya hai woh ek nayi property hi samajh lo jo ki values ko override kar rahi hai constructor ki values per...
  }

  get password() {
    return `${this._password}hitesh`;
  }

  set password(value) {
    this._password = value;
  }
  //setters ko return nahun karte hain getters return karte hain cheezein...fir se bata rha haon ki class ke baahar jo main uska instance bana rha hoon uske  perspective se socho to get and set ka sahi matlab samajh aayega...
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);
