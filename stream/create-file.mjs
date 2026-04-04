import fs from "fs";
import path from "path";

if (!process.argv[2] || !process.argv[3]) process.exit(0);

const fileName = process.argv[2];
const lines = parseInt(process.argv[3]);

if (isNaN(lines)) process.exit(0);

const writeStream = fs.createWriteStream(path.join("./files", fileName));

for (let i = 1; i <= lines; i++) {
  writeStream.write(`This is a line number ${i}\n`);
}

writeStream.end(() => console.log("Done"));
