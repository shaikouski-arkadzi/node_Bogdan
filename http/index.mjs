import http from "http";

const obj = [
  { id: 1, text: "Test 1" },
  { id: 2, text: "Test 2" },
  { id: 3, text: "Test 3" },
];

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/text") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello");
    return;
  }
  if (req.url === "/json") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(obj));
    return;
  }
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end("Not found");
  return;
});

server.listen(3002, () => console.log("Server was launced"));
