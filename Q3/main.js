var personName = "kinza qamar";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (abcd) { return abcd.toUpperCase(); }));
