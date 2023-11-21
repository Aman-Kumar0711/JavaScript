//forEach loop kuchh bhi return nahin karta hai...
//main forEach loop waali command ko kisi variable mei store kara ke dekhta hoon fir uss variable ko print karunga ot output aayega undefined...let's see
const programmingLanguages = ["javascript", "python", "java", "c++"];
const values = programmingLanguages.forEach((item) => {
  return item;
});
console.log(values); //iska output aayega undefined

//per bhai yeh to dikkat ho gayi, ab zaruri thode hi hai har baar main value ko print hi karaaunga kya pta mujhe value return karwaani ho! To ab kya karein?
//chalo karte hain iska kuchh intezaam
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//maan lo mujhe woh values leni hain jo 5 se baadi hain...per forEach to kuchh return karega hi nahin hence hum use karte hain "filter"  yeh return karta hai values and isme bhi callback fxn define karna hota hai

const newNums = myNums.filter((num) => {
  return num > 5; //return keyword isliye use kiya kyun ki curly braces laga diye hain..agar khaali rehne deta ya () lagata to nahin likhna padta...rememeber explicit and implicit return!
}); //jo elements >5 honge woh filter ho jaayenge
console.log(newNums);

//yeh kaam hum forEach loop se bhi kar sakte hain
const newNum = [];
myNums.forEach((num) => {
  if (num > 5) {
    newNum.push(num);
  }
});
console.log(newNum);

//aao thoda aur dekhein filter ko
const dataOfBooks = [
  { bookName: "Book1", genre: "fiction", publishYear: 1980 },
  { bookName: "Book2", genre: "non-fiction", publishYear: 1981 },
  { bookName: "Book3", genre: "history", publishYear: 1982 },
  { bookName: "Book4", genre: "drama", publishYear: 1983 },
  { bookName: "Book5", genre: "history", publishYear: 1984 },
  { bookName: "Book6", genre: "fiction", publishYear: 1985 },
  { bookName: "Book7", genre: "non-fiction", publishYear: 1986 },
  { bookName: "Book8", genre: "drama", publishYear: 1988 },
  { bookName: "Book9", genre: "fiction", publishYear: 1988 },
  { bookName: "Book10", genre: "history", publishYear: 1989 },
];

let newBooks = dataOfBooks.filter((book) => book.genre === "history");
console.log(newBooks);
newBooks = dataOfBooks.filter((book) => book.publishYear > 1983);
console.log(newBooks);
newBooks = dataOfBooks.filter((book) => {
  return book.genre === "history" && book.publishYear > 1983;
});
console.log(newBooks);
