//isme hum map ki baat karenge...yeh similar hai forEach loop ke bas isme yeh fayda hai ki yeh automatically return karwa deta hai values ko
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.map((num) => num + 10); //agar {} use karke scope open kar dunga to return keyword use karna padega
console.log(newNums);

//ab ek method ke baare mei padhenge jiska naam hai chaining usme yeh hota hai ki hum ek saath kai methoda laga sakte hain like 2 map ek saath ya map ke baad filter and so on...
let newNum = myNums.map((num) => num * 10).map((num) => num + 1); //pehle waale map ki return value pass-on ho jaayegi 2nd waale map mei, fir uska result store hoga newNum mei..aage kuchh aur hota to fir usme pass-on hoti values fir result newNum mei jaata and so on
console.log(newNum);
//jitni marzi chahu utni chaining kar sakta hoon
newNum = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 30);
console.log(newNum);
