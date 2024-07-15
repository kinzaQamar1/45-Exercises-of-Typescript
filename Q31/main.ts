//creating array with 5 values
let username = ["kinza","saim","admin","bilal","ayesha"];

//remove all values from your array now your array is empty
username =[]

//if statement for checking length of our array is empty?
if (username.length === 0){

    console.log("your array is empty we need to find some users!");
    
}
else{
    //using for each loop on array
username.forEach(oneuser =>{
    if (oneuser === "admin"){
        console.log(`HELLO ${oneuser},would you like to see a status report`);
        
    }
    else {
        console.log(`HELLO ${oneuser},thankyou for logging in`);
        
    }
});
}