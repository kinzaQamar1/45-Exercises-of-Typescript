//define a function to print each megician name an array
function show_megicians (megicians : string[]) {

    megicians.forEach(name => console.log(name));
        
}

//define an array containing megicians names
let megicians_names = ["David copperfeild","Criss angel","Herry potter"]

//call the function ton print each megician names
show_megicians(megicians_names)