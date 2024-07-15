let guestList = ["Saim","Kinza","Bilal","Muskan"];

let dontCome = guestList[0];

console.log(dontCome,"is not coming");

guestList.splice(0,1,"Tasbiha");


guestList.forEach(guest => console.log(`salam,${guest},"would you like to dinner with me?`));


