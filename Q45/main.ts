//define function to create car object with optional options...
function create_car( manufacturer: string, model : string , ...options :[string,any][]) : object{

    let car ={manufacturer , model};
    options.forEach(([key,value]) => car [key] = value);
    return car;
}
    
console.log(create_car("Toyota","Corrolla",["color","black"],["year",2020]));

console.log(create_car("Ford","Fiesta",["color","blue"],["sunroof",true]));
