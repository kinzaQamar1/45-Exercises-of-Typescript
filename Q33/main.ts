//creating a array
let numbers = [1,2,3,4,5,6,7,8,9];

//using for loop
for(let onenumber of numbers){
    let ordinalendings : string;

    if(onenumber === 1){ 
    ordinalendings = "st"
    }
    else if (onenumber === 2){
        ordinalendings = "nd"
    }
    else if (onenumber === 3){
        ordinalendings = "rd"
     }
    else{
        ordinalendings = "th"
    }
    console.log(`${onenumber}${ordinalendings}`);
    
}