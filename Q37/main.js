"use strict";
//making a function
function make_shirt(size = "large", printMessage = "I LOVE TYPESCRIPT") {
    console.log(`Creating a ${size} shirt with ${printMessage} prints on shirt`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I LOVE JAVASCRIPT");
