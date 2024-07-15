var current_users = ["ali", "ayesha", "rehman", "areeba", "sana"];
var new_users = ["kinza", "tasbiha", "ali", "waniya", "areeba"];
new_users.forEach(function (new_one_user) {
    var our_condition = (current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); }));
    if (our_condition) {
        console.log("SORRY ".concat(new_one_user, ",is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
