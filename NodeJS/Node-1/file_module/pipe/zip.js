const zlib = require("zlib");
const fs = require("fs");
const path = require("path");
// console.log(zlib);

const readable = fs.createReadStream(path.join(__dirname, "a.txt"));
const writable = fs.createWriteStream(path.join("aa.txt.gz"));
const zip = zlib.createGzip(); // TODO: zip file အဖြစ် ပြောင်းတာ

readable.pipe(zip).pipe(writable);
