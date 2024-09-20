const path = require("path");
const fs = require("fs");

const listNodes = () => {
  const nodeDir = path.join(__dirname, "notes");
  const files = fs.readdirSync(nodeDir); // TODO: list nodes in directory 
  if (files.length === 0) {
    console.log("No notes available");
  } else {
    console.log("Your notes");
    files.forEach((file) => {
      console.log(`- ${path.basename(file, ".txt")}`); // TODO: extension(.txt) ထည့်ထားရင် extension မပါတော့
    });
  }
};

module.exports = listNodes;
