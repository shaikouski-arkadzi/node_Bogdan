import http from "http";

const server = http.createServer((req, res) => {
  res.end("Response from server");
});

server.listen(3005, () => console.log("Server was started on port 3005"));
