const createNote = require("./createNode");
const readNode = require("./readNode");
const appendNode = require("./appendNode");
const listNodes = require("./listNodes");
const deleteNode = require("./deleteNode");

const action = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

switch (action) {
  case "create":
    createNote(title, content);
    break;

  case "append":
    appendNode(title, content);
    break;

  case "read":
    readNode(title);
    break;

  case "list":
    listNodes();
    break;

  case "delete":
    deleteNode(title);
    break;

  default:
    console.log("Unknown action");
}
