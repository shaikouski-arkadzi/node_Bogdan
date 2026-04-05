import fs from "fs";

const fileName = "./files/test.txt";
const copiedFileName = "./files/test-copy.txt";

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedFileName);

readStream.pipe(writeStream);

writeStream.on("finish", () => console.log("Done. File was copied"));
