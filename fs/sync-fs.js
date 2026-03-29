const fs = require("node:fs");

try {
  fs.writeFileSync("./first.txt", "First file text");
  console.log("File first.txt was written");
  fs.appendFile("./first.txt", "\nOne more line");
  console.log("Apended text to first.txt");
  fs.rename("./first.txt", "renamed-first.txt");
  console.log("File was renamed");
} catch (error) {
  console.error(error);
}
