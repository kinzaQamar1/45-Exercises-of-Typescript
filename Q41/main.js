//define a function to print each megician name an array
function show_megicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
//define an array containing megicians names
var megicians_names = ["David copperfeild", "Criss angel", "Herry potter"];
//call the function ton print each megician names
show_megicians(megicians_names);
