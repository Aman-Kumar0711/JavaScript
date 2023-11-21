//yeh for-each loop bahut use hota hai array ke iteration mei
const programmingLanguages = ["python", "c++", "ruby", "java", "javascript"];
//pehli baat to yeh ki higheer order loop hai for-each loop matlab ki isme function define karte hain and uss function ko kehte hain callback fxn and callback fxn likhte time uska kuchh naam nahin hota
programmingLanguages.forEach(function (item) {
  console.log(item);
});
//yeh jo fxn hai forEach ke andar woh har baar call hoga array ke har element per jaa jaakar and jo iterator jaaa rha hai hum usko i,item etc kuchh bhi keh sakte hain
//jo bhi kaam karwaana hai woh fxn ki body ke andar define kar sakte hain...

//hum arrow function ke roop mei callback fxn define kar sakte hain
console.log();
programmingLanguages.forEach((item) => {
  console.log(item);
});
console.log();

//agar maan lo mujhe callback fxn foreach ke () mei define nahin karna and maine woh kahin aur define kar rakha hai to main uss fxn ko as a parameter pass kar sakta hoon forEach mei and that will act as the callback function
//let's see
function printItem(item) {
  console.log(item);
}
programmingLanguages.forEach(printItem);
console.log();
programmingLanguages.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
//forEach mei bahut commonly used scene yeh hota hai jab array ke andar objects ho bahut saare i.e., [{},{},{},{}..]
const myArr = [
  {
    language: "javascript",
    fileName: "js",
  },
  {
    language: "c++",
    fileName: "cpp",
  },
  {
    language: "python",
    fileName: "py",
  },
];
myArr.forEach((item) => {
  //yahaan per item ka matlab hua array ka item jo ki abhi hai object...matlab yeh ki abhi item hai ek object to fir main object ki kisi bhi cheez ka access le sakta hoon simple...
  console.log(item.fileName);
});
