const http = require("http");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

function serveFile(res, filePath, contentType, responseCode = 200) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(`Error loading file: ${filePath}`, err);
      res.writeHead(500, { "Content-Type": contentType });
      res.end("500! - Error loading the file");
    } else {
      res.writeHead(responseCode, { "Content-Type": contentType });
      res.end(data);
    }
  });
}
const server = http.createServer((req, res) => {
  // console.log(req.url)
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  switch (pathname) {
    case "/":
      serveFile(res, path.join(__dirname, "views", "home.html"), "text/html");
      break;
    case "/about":
      serveFile(res, path.join(__dirname, "views", "about.html"), "text/html");
      break;
    case "/projects":
      serveFile(
        res,
        path.join(__dirname, "views", "projects.html"),
        "text/html"
      );
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 - Not Found");
      break;
  }
});
server.listen(PORT, console.log(`server running at http://localhost:${PORT}`));
