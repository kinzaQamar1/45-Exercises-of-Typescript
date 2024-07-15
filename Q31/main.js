var username = ["kinza", "saim", "admin", "bilal", "ayesha"];
username = [];
if (username.length === 0) {
    console.log("your array is empty we need to find some users!");
}
else {
    //using for each loop on array
    username.forEach(function (oneuser) {
        if (oneuser === "admin") {
            console.log("HELLO ".concat(oneuser, ",would you like to see a status report"));
        }
        else {
            console.log("HELLO ".concat(oneuser, ",thankyou for logging in"));
        }
    });
}
