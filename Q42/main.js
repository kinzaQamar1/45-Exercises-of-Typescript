//define function to show megicians names
function show_megicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
//function to make megicians great through.map() it will be modify array
function make_great(megicians) {
    return megicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of megicians names
var megician_names = ["David copperfeild", "Criss angel", "Herry potter"];
//Call make_great function to modify megicians names
var great_megicians = make_great(megician_names);
//Call show_megicians that show modified list of megicians 
show_megicians(great_megicians);
