import http from "http";

const server = http.createServer((req, res) => {
  console.log(req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello");
});

server.listen(3002, () => console.log("Server was launced"));
