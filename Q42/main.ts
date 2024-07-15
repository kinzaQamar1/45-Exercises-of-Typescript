//define function to show megicians names
function show_megicians (megicians : string[]) {

    megicians.forEach(name => console.log(name));
        
}

//function to make megicians great through.map() it will be modify array
function make_great (megicians : string[]){

   return megicians.map(name => `The Great ${name}`);
}
//Define an array of megicians names
let megician_names = ["David copperfeild","Criss angel","Herry potter"];

//Call make_great function to modify megicians names
let great_megicians = make_great(megician_names);

//Call show_megicians that show modified list of megicians 
show_megicians(great_megicians);