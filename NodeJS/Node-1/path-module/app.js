const path = require("path");

// console.log(__dirname); // TODO: foldername ကို ထုတ်ပေးတာ
// console.log(__filename);

const file = __filename;
const dirname = __dirname;

const dir = path.dirname(file);
// console.log(dir);

const filename = path.basename(file);
// console.log(filename);  // TODO: filename နဲ့ extensionကို ထုတ်ပေးတာ

const ext = path.extname(filename);
// console.log(ext); // TODO: file extension ထုတ်ပေးတာ

const fileExt = path.basename(file, ext);
// console.log(fileExt); // TODO: file name without extension

const pathObject = {
  dir: "/home/user/dir",
  base: "file.txt",
};
// console.log(path.format(pathObject)); // TODO: path format

const result = path.resolve(pathObject.dir, pathObject.base);
// console.log(result); // TODO: absolute path

const file2 = "/home/dist/js/./app.js";
const file3 = "/home/dist/js/../app.js";
// console.log(path.normalize(file2)); // TODO: ./တွေ ../တွေကို ဖြုတ်ချပေးတာ
// console.log(path.normalize(file3)); // TODO: ./တွေ ../တွေကို ဖြုတ်ချပေးတာ

// console.log(path.join("/about","post","post1","text.txt")); // TODO: path join

// console.log(path.parse(result)); // TODO: path parse

// console.log(path.sep); // TODO: path separator
// console.log(path.delimiter); // TODO: path delimiter
// console.log(path.win32.basename("C:\\temp\\myfile.html")); // TODO: path win32
// console.log(path.posix.basename("/temp/myfile.html"));
