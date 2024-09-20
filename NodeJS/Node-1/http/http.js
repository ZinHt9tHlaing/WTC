const http = require("http");
// console.log(http);

const server = http.createServer((req, res) => {
  console.log(req.url);
  //   res.statusCode = 200;
  // res.setHeader("Content-Type", "text/plain");
  res.writeHead(200, { "Content-Type": "text/plain" }); // TODO: statusCode & setHeader
  res.end("hello world");
});

server.listen(3000, () =>
  console.log("server running at http:://localhost:3000")
);
