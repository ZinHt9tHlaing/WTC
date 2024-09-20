// TODO: synchronous

const path = require("path");
const fs = require("fs");

// fs.writeFileSync(path.join(__dirname, "a.html"), "write a txt", "utf8");
// fs.writeFileSync(path.join(__dirname, "b.txt"), "write b file", "utf8");

// try {
//   const data = fs.readFileSync(path.join(__dirname, "a.html"), "utf8");
//   console.log(data);
// } catch (e) {
//   console.log(e.message);
// }

const b = fs.readFileSync(path.join(__dirname, "b.txt"), "utf8");
// console.log(b);

// try {
//   const filePath = path.join(__dirname, "a.txt"); // TODO: file append
//   fs.appendFileSync(filePath, "\n append text to a.txt file \n next line");
// } catch (e) {
//   console.log(e.message);
// }

// try {
//   const filePath = path.join(__dirname, "aa.js"); // TODO: file delete
//   fs.unLinkSync(filePath);
// } catch (e) {
//   console.log(e.message);
// }

// try {
//   const filePath = path.join(__dirname, "ppp"); // TODO: folder delete
//   fs.rmdirSync(filePath);
// } catch (e) {
//   console.log(e.message);
// }

// try {
//   const filePath = path.join(__dirname, "ppp"); // TODO: folder create
//   fs.mkdirSync(filePath);
// } catch (e) {
//   console.log(e.message);
// }
