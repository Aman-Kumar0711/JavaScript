// fetch ek bahut hi exciting feature hai js ke andar,yeh browser ke andar to pehle se hi tha but jaise hi Node.js ke andar isko use kar paa rahe thhe to isne poora scenerio hi badal diya web request bhejne ka...pehle request ya xhrrequest use karte thhe

// In 2015, the Fetch API was launched as a modern successor to XMLHttpRequest, and it has subsequently become the de facto standard for making asynchronous calls in web applications. One significant advantage Fetch has over XMLHttpRequest is that it leverages promises, allowing for a simpler and cleaner API while avoiding callback hell.

// Though the Fetch API has been around for a while now, it wasn’t included in the Node.js core because of some limitations. In a question answered by one of Node’s core contributors, it was noted that the browser’s Fetch API implementation is dependent on a browser-based Web Streams API and the AbortController interface (for aborting fetch requests), which wasn’t available in Node until recently. As such, it was difficult to choose the best approach to include it in the Node core.

// Long before the addition of the Fetch API, the request module was the most popular method for making HTTP requests in Node. But the JavaScript ecosystem at large quickly evolved, and newly introduced patterns made request obsolete. A crucial example here is async/await; there was no provision for this in the request API, and the project was later deprecated due to these limitations.

//pehli baat to yeh ki fetch ek promise return karta hai and dusri baat yeh ki agar maan lo fetch karne per ERROR 404 aa raha hai to woh .then() mei hi jaayega .catch() mei nahin kyun ki ERROR 404 bhi ek response hi hai...catch mei tab jaati hai cheez jab request poori ho hi nahin paayi like koi response aaya hi nahin

//jaise hi fetch likhte hain to 2 parts mei kaam hota hai, ek part to memory mei data reserve karta hai jisme ki arrays hote hain onFulfilled[] and onRejection[] jo ki promises resolve hone per and reject hone per jo hoga woh rakhte hain and we can't access them...dusra hota hai browser ya node ki API request handle karne ke liye
