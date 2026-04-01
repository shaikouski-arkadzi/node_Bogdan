import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/stream" && req.method === "GET") {
    const filePath = "./files/test.txt";
    const readStream = fs.createReadStream(filePath);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    readStream.pipe(res);
  }
  if (req.url === "/no-stream" && req.method === "GET") {
    const filePath = "./files/test.txt";
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("error reading file");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(data);
      }
    });
  }
});

server.listen(3002);
