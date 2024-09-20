const http = require("http");
// console.log(http);

const users = [
  { id: 1, name: "john", age: 20 },
  { id: 2, name: "jane", age: 21 },
  { id: 3, name: "mike", age: 22 },
];

const port = 2000;
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
});

server.listen(port, console.log(`server running at http:://localhost:${port}`));
