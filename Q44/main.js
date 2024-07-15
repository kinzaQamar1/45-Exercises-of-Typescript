//define a function with the rest parameter that accepts items arguments representing our sandwich
function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMakimg a sandwich with the following items\n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nNow enjoy your sandwich");
}
//call the function 3 times with 3 different number of argument
makesandwich("bread", "cheese", "egg");
makesandwich("bread", "butter");
makesandwich("bread", "egg", "tomatoes", "cheese", "mayo", "chicken");
