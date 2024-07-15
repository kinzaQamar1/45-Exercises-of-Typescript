//define function to show megicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through.map() it will be modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magicians names
var magician_names = ["David copperfeild", "Criss angel", "Herry potter"];
//making a copy of orignal array through .slice() function
var copy_magician_names = magician_names.slice();
//modify the copied array to include "the great" with their names
var copy_great_magicians = make_great(copy_magician_names);
//orignal 
console.log("orignal array\n");
show_magicians(magician_names);
//copied
console.log("\ncopied array\n");
show_magicians(copy_great_magicians);
