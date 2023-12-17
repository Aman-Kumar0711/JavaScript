//js is a synchronous and single threaded language matlab ki pehle ek line execute then dusri and so on...
//iske execution context ki baat pehle ho chuki hai, each operation waits for the last one to complete before execution...

//js mei 2 type ke code likhe jaate hain 1. Blocking code 2. Non-Blocking code
//Blocking Code->block the flow of program-> read file sync
//Non-Blocking Code->does not block execution-> read file async
//basically hota yeh hai ki jaise hi file read karne ki baat aati hai to access jaata hai kernal ke paas woh file read karta hai , to agar blocking code hoga to usme jab tak file read ho rahi hogi tab tak kuchh aur nahin kar paayenge to samay ki barbaadi hai...achha yeh to aisa sound kar rha hai ki non-blocking code is good ,but aisa nahin hai dono ke apne use cases hain jaise ki maan lo mujhe ek user ko database mei register karna hai and uske baad success message dena hai to agar main non-blocking code use karunga to usme database jo ki ek file system type hi hai , jab tab udhar entry ho rahi hogi tab tak yahaan sucess message aa chuka hoga, ab bhai by any chance user register nahin ho paayag database mei to fir bhi success message to aa chuka hai, this is to very wrong!
//hence here we will use blocking code, ki jab tab database se result na aa jaaye tab tak aage nahin badhna

//JS asynchronous language h but uska default behaviour synchronous hota h. Us behavior ko hame forcefully bta kr async bnana pdta h.
//task queue makes js asynchronous...yeh waapas CALL STACK mei daalta hai tasks ko jo ki Web ya Node API mei call kar diye thhe jiss se apne man mutaabik samay per given function ko execute karwa saku...fir uska  output jaata hai task queue mei jo ki waapas call stack mei daal diya jaata hai
//fetch() ek naya API hai isme bhi task queue jaisa scene hai but iski higher priority hoti hai
//iske diagram ke liye discord check karo
