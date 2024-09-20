const path = require("path");
const fs = require("fs");

const createNote = (title, content) => {
  const filePath = path.join(__dirname, "notes", `${title}.txt`);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Note ${title} created`);
};

module.exports = createNote;
