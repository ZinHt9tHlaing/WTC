const path = require("path");
const fs = require("fs");

const deleteNode = (title) => {
  const filePath = path.join(__dirname, "notes", `${title}.txt`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Note ${title} deleted.`);
  } else {
    console.log(`Note ${title} does not exist.`);
  }
};

module.exports = deleteNode;