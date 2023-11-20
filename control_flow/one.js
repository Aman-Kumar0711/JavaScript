const money = 1000;
if (money > 500) {
  console.log("Money is more than 500");
} else console.log("Money is not more than 500"); //isme maine curly braces use nahin kare yeh wahi apne cpp ki tarah hai ki agar ek line ka hai if-else ya fxn ke andar ka content to usme {} lagaaane ki zarurat nahin hoti...
console.log("Aman");

//yeh to ho gaya basic if-else...ab baat karte hain switch-case ki:
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
//e.g.,
const month = 11;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Enter valid month number.");
    break;
}
//break hum isliye lagaate hain kyun ki maan lo ek bhi case match ho gaya to uske baad ke saare cases execute honge including default, agar humne break nahin lagaaya hai to...
