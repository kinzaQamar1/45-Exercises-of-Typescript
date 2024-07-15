var guestList = ["Saim", "Kinza", "Bilal", "Muskan"];
var dontCome = guestList[1];
console.log(dontCome, "is not coming");
guestList.splice(0, 1, "Tasbiha");
guestList.forEach(function (guest) { return console.log("salam,".concat(guest, ",\"would you like to dinner with me?")); });
