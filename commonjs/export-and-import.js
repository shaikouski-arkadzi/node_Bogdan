const { myName, myHobbies } = require("./multiple-exports");

const myFriendName = "Alice";

module.exports.myName = myName;
module.exports.myFriendName = myFriendName;
module.exports.myGreatHobbies = myHobbies;
