var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array of countries you have to visit and print its orignal order
var countriestovisit = ["China", "Brazil", "Denmark", "Argentina"];
console.log("Orignal order", countriestovisit);
//print the array in alphabetical order without modyfying the actuall array list
console.log("alphabetical ordder", __spreadArray([], countriestovisit, true).sort());
//show that the array is still in its origna lorder
console.log("still in orignal order", countriestovisit);
//print the array in reverse order without modyfying the actuall array list
console.log("reverse order", __spreadArray([], countriestovisit, true).reverse());
//show that the array is still in its origna lorder
console.log("still in orignal order", countriestovisit);
//we have changed the orignal array order
console.log("orignal array reversed", countriestovisit.reverse());
//print the array to show that its back to its orignal order
console.log("back to orignal order", countriestovisit.reverse());
//print the array to shows that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order", countriestovisit.sort());
//we have changed again the orignal array order
console.log("orignal array reversed again", countriestovisit.reverse());
