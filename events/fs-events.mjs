import { EventEmitter } from "events";
import fs from "node:fs";

const fileEmitter = new EventEmitter();

fileEmitter.on("writeComplete", () => {
  console.log("File first.txt was written");
  fs.appendFile("./first.txt", "\nOne more line", () =>
    fileEmitter.emit("appendComplete"),
  );
});

fileEmitter.on("appendComplete", () => {
  console.log("Apended text to first.txt");
  fs.rename("./first.txt", "renamed-first.txt", () =>
    fileEmitter.emit("renameComplete"),
  );
});

fileEmitter.on("renameComplete", () => console.log("File was renamed"));

fs.writeFile("./first.txt", "First file text", () =>
  fileEmitter.emit("writeComplete"),
);
