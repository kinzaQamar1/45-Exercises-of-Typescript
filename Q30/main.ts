//CREATING ARRAY
let username = ["kinza","saim","admin","bilal","ayesha"];

//using for each loop on array
username.forEach(oneuser =>{
    if (oneuser === "admin"){
        console.log(`HELLO ${oneuser},would you like to see a status report`);
        
    }
    else {
        console.log(`HELLO ${oneuser},thankyou for logging in`);
        
    }
})