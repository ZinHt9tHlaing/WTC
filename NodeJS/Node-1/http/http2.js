const http = require("http");
// console.log(http);

const port = 2000;
const server = http.createServer((req, res) => {
  console.log(req.url);
});

server.listen(port, () =>
  console.log(`server running at http:://localhost:${port}`)
);
