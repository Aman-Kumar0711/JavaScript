//yahaan pe hum scope ke baare mei jaanenge jaise global and block(kind of local) scope and yeh bhi jaanenge ki kyun var keyword nahin use karte variable define karte samay and let ya const use karte hain...
if(true){
    let a=30;
    const b=40;
    var c=50;
}
//kaayde se to iss if ke baahar koi bhi a,b and c mei se accessible nahin hona chahiye ..haan to a and b ke case mei aisa hoga but var c ke case mei aisa nahin hoga... 
//console.log(a); iss se error aayega
//console.log(b); same isme
console.log(c); //but yeh print ho jaayega
//aise to bhasad mach jaayegi...isliye avoid karte hain var use karna

//function ko hum 2 tarah se define kar sakte hain(abhi ke liye 2 hi pta hain aage aur seekhenge)...
//pehla
function addOne(num){
    return num+1;
} //main iss definiton se pehle call kar loon fxn to woh allowed hai but jo addTwo jaise maine define kara hai usme yeh allowed nahin hoga like ki main define karne waali line se pehle nahin call kar sakta... kyun ki isme maine fxn ko define kiya hai and usko fir ek variable mei store kara diya hai to woh jab tak line nahin aaa jaayegi uss se pehle acess hi nahin kar sakte... hoisting bolte hain isko... 
const addTwo=function(num){
    return num+2;
}
