const http = require("http");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;
const users = [
  {
    id: 1,
    name: "Zin Htet",
    email: "zinhtet@gmail.com",
  },
  {
    id: 1,
    name: "Jue Jue",
    email: "juejue@gmail.com",
  },
  {
    id: 1,
    name: "rose",
    email: "rose@gmail.com",
  },
];

const server = http.createServer((req, res) => {
  console.log(`Requested URL: ${req.url}`);
  console.log(`Requested Host: ${req.headers.host}`);

  // Normalize the URL
  const parsedURL = new URL(req.url, `http://${req.headers.host}`);
  switch (parsedURL.pathname) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(path.join(__dirname, "views", "home.html")).pipe(res);
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(path.join(__dirname, "views", "about.html")).pipe(
        res
      );
      break;
    case "/login":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(path.join(__dirname, "views", "login.html")).pipe(
        res
      );
      break;

    case "/register":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(path.join(__dirname, "views", "register.html")).pipe(
        res
      );
      break;
    // case "/users":
    //   res.writeHead(200, { "Content-Type": "application/json" });
    //   fs.createReadStream(path.join(__dirname, "views", "users.html")).pipe(
    //     res
    //   );
    //   break;
    default:
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(path.join(__dirname, "views", "404.html")).pipe(res);
      break;
  }
});

server.listen(PORT, () =>
  console.log(`server running at http:://localhost:${PORT}`)
);
