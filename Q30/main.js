//CREATING ARRAY
var username = ["kinza", "saim", "admin", "bilal", "ayesha"];
username.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("HELLO ".concat(oneuser, ",would you like to see a status report"));
    }
    else {
        console.log("HELLO ".concat(oneuser, ",thankyou for logging in"));
    }
});
