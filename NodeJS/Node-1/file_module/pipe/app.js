// TODO: pipeက တခြားfileထဲကို textတွေ mp4တွေ လှမ်းပို့တာ

const fs = require("fs");
const path = require("path");

const fileA = path.join(__dirname, "a.txt");
const fileB = "b.txt";

fs.createReadStream(fileA)
  .pipe(fs.createWriteStream(fileB))
  .on("finish", () => console.log("File copy successfully"))
  .on("error", (err) => console.error("Error", err));
