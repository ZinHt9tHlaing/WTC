const path = require("path");
const fs = require("fs");

const appendNode = (title, content) => {
  const filePath = path.join(__dirname, "notes", `${title}.txt`);
  if (fs.existsSync(filePath)) {const path = require("path");
    const fs = require("fs");
    fs.appendFileSync(filePath, content, "utf8");
    console.log(`Node ${title} append file.`);
  } else {
    console.log(`Node ${title} does not exist.`);
  }
};

module.exports = appendNode;
