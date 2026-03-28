const exportedObject = require("./multiple-exports");
const greeting = require("./single-export");
const { myName, myFriendName, myGreatHobbies } = require("./export-and-import");

console.log(exportedObject);
greeting(exportedObject.myName);
console.log(myName);
console.log(myFriendName);

exportedObject.myHobbies.push("running");
console.log(exportedObject.myHobbies);
console.log(myGreatHobbies);
