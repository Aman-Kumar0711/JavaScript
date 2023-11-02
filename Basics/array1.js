//js mei arrays resizable hote hain and zaruri nahin koi ek hi datatype ke element rakhu main array mei... 
const myArr=[1,2,3,4,5]
const myArr1=["Aman","Anjali"]
const myArr2=new Array(1,2,3,4,5,6,7,8,9,10)
//array mei kisi element ko access karna ho to indexing se karna hota hai like arr[i] 

//Array Methods
console.log(myArr)
myArr.push(6)
console.log(myArr)
myArr.pop() //yeh automatically last element ko delete kar dega
console.log(myArr)
// myArr.shift() //yeh sabse pehle element ko delete kar dega
console.log(myArr)

console.log(myArr.includes(3)) //yeh true ya false answer karega depending on 3 mere myArr mei hai ya nahin
console.log(myArr.indexOf(3))

const newArr=myArr.join() //yeh myArr ke saare elements ko string format mei daal dega newArr ke andar which means ki newArr ka type hoga string... 
console.log(newArr)
console.log(typeof newArr)


//ab hum baat karenge slice and splice ki

console.log("A",myArr)
const slicedArr=myArr.slice(1,3) //iska matlab hai 1 se 3-1 index tak ke elements aa gaye myArr ke slicedArr mei
console.log("B",myArr)
console.log(slicedArr)
const splicedArr=myArr.splice(1,3)
console.log("C",myArr)
console.log(splicedArr)

//to slice and splice mei yeh fark hai ki slice mei pehli baat to range include nahin hoti that is (m,n) ki slicing ki hai ki m se n-1 tak ka hissa aayega and yeh ki original array mei change nahin aata kuchh bhi but splice mei range bhi include hoti hai and original array mei se sliced hissa ek dam hatt hi jaata hai like agar 

// [1,2,3,4,5] hai array and maine splice(0,2) kar diya to ab mera original array bas [4,5] bachega