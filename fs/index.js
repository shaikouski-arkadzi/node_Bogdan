const fs = require("node:fs");

fs.writeFile("./first.txt", "First file text", (err) => {
  if (err) console.error(err);
  else {
    console.log("File first.txt was written");
    fs.appendFile("./first.txt", "\nOne more line", (err) => {
      if (err) console.error(err);
      else {
        console.log("Apended text to first.txt");
        fs.rename("./first.txt", "renamed-first.txt", (err) => {
          if (err) console.error(err);
          else console.log("File was renamed");
        });
      }
    });
  }
});
