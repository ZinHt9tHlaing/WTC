const path = require("path");
const fs = require("fs");

const readNode = (title) => {
  const filePath = path.join(__dirname, "notes", `${title}.txt`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");
    console.log(`Content of ${title} :\n ${content}`);
  } else {
    console.log(`Note ${title} does not exist.`);
  }
};

module.exports = readNode;
