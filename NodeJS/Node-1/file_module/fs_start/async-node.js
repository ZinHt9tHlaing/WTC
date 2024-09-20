// TODO: asynchronous

const path = require("path");
const fs = require("fs");

// TODO: file create
fs.writeFile(path.join(__dirname, "c.txt"), "hello c file", "utf8", (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("The file has been saved!");
});

// fs.writeFile(  // TODO: file write
//   path.join(__dirname, "b.txt"),
//   "hello b file",
//   "utf8",
//   (err, data) => {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//     console.log(data);
//   }
// );

fs.appendFile(
  // TODO: file append
  path.join(__dirname, "c.txt"),
  "append text",
  "utf8",
  (err) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("The file has been appended!");
  }
);

// fs.unlink(path.join(__dirname, "c.txt"), (err) => { // TODO: file delete
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log("The file has been deleted!");
// })

// fs.rmdir(path.join(__dirname, "c.txt"), (err) => { // TODO: folder delete
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log("The file has been deleted!");
// });

// fs.mkdir(path.join(__dirname, "c.txt"), (err) => { // TODO: folder delete
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log("The file has been deleted!");
// });
