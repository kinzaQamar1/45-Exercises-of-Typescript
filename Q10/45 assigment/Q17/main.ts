//creating a guestlist array
let guestList = ["saim","kinza","bilal","ayesha"];

//making variable for those guest who's not come
let dontCome = guestList[0];

//print the name of guest who is not come
console.log(dontCome,"Nhi aa sktay");

//add or remove guests from guestlist array
guestList.splice(0,1,"tasbiha");

//message print for bigger table
console.log("Good News! we have foun a bigger table for dinnerr");

//adding a new guest at starting index of array
guestList.unshift("zareen");

//adding a new guest at ending index of array
guestList.push("sehar");

//making a variable for storing A middle index of our guest list array
let middleIndex:number = Math.floor(guestList.length/2);

//adding a new guest at a middle index of array
guestList.splice(middleIndex,0,"areesha");

//print a message for updating the list
console.log("update list of our guest");

//sending a invitation to our guests one by one with their names
guestList.forEach(oneguest => console.log(`salam,${oneguest},"would you like to dinner with me?`));

//informs that only two guests invited for the dinner
console.log("unfortunately,the new dinner table won't arrived on time So i can only invited two guests");

//using while-loop for removed guests form array until twp guests are remain
while(guestList.length>2){
    let removeguests = guestList.pop();
    console.log(`SORRY,${removeguests},i cant invited you for dinner`);
    
}

//sending a invitation for last two guests
console.log("Invitations to the last two guests");
guestList.forEach(lasttwoguests => console.log(`Luckily ${lasttwoguests},you are still invted for dinner`));

//now we remove the last two guests
guestList.pop();
guestList.pop();

console.log("Empty list",guestList);
