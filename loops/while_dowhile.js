//isme while and do while loop ki baat karenge
//syntax:
// while (condition) {

// }
let i = 1;
while (i <= 5) {
  console.log(`value of i is ${i}`);
  i++;
}
//do while loop mei pehle kaam hota hai fir baad mei condition check hoti hai isliye maan lo agar shuruat se hi condition false hai tab bhi ek baar to code execute hoga hi
let score = 11;
do {
  console.log(`score is ${score}`);
  score++;
} while (score < 10);
