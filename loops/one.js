//sabse basic hota hai for loop
for (let index = 1; index <= 5; index++) {
  const element = index;
  console.log(index);
}
//break-continue keyword,
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log(`detected 5`);
    break;
  }
  console.log(`value of i is ${i}`);
}
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log(`detected 5`);
    continue; //continue se yeh hoga ki 5 aate hi yeh detected 5 waali line print hogi and then loop waapas se pahoch jaayega jaise chal rha  tha but ek aage waale number ke liye ..arey matlab yeh ki i =5 hote hi continue per jaise hi aayega to seedhe i<=10;i++ waali cheez shuru ho jaayegi fir se
  }
  console.log(`value of i is ${i}`);
}
