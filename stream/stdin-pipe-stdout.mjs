import stream from "stream";
import fs from "fs";

// Pipe to stdout
// process.stdin.pipe(process.stdout);

// Pipe to file
const filePath = "./files/stdin-dump.txt";

const writeStream = fs.createWriteStream(filePath);

process.stdin.pipe(writeStream);
