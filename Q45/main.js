//define function to create car object with optional options...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(create_car("Toyota", "Corrolla", ["color", "black"], ["year", 2020]));
console.log(create_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
