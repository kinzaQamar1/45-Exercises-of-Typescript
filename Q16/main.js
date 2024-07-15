//creating a guestlist array
var guestList = ["saim", "kinza", "bilal", "ayesha"];
//making variable for those guest who's not come
var dontCome = guestList[0];
//print the name of guest who is not come
console.log(dontCome, "Nhi aa sktay");
//add or remove guests from guestlist array
guestList.splice(0, 1, "tasbiha");
//message print for bigger table
console.log("Good News! we have foun a bigger table for dinnerr");
//adding a new guest at starting index of array
guestList.unshift("zareen");
//adding a new guest at ending index of array
guestList.push("sehar");
//making a variable for storing A middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest at a middle index of array
guestList.splice(middleIndex, 0, "areesha");
//print a message for updating the list
console.log("update list of our guest");
//sending a invitation to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("salam,".concat(oneguest, ",\"would you like to dinner with me?")); });
