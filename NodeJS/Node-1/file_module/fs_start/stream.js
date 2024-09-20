const path = require("path");
const fs = require("fs");

// TODO: reading large files and videos
const dataStream = fs.ReadStream(path.join(__dirname, "hi.html"), "utf8");
dataStream.on("data", (chunk) => {
  // TODO: data event listener with chunk data
  console.log(chunk);
  console.log(`Received ${chunk.length} bytes of data`);
});

dataStream.on("end", () => {
  console.log("End of file");
});

dataStream.on("error", (err) => {
  console.log(`Error occurred ${err}`);
});

// TODO: create file and write
// let hh = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas omnis molestias repellat officiis, hic amet, excepturi iusto sed ea veniam reiciendis sunt. Saepe iure at molestias ut sequi, tempora illo sunt quibusdam provident optio reiciendis blanditiis eum ipsa possimus repellat natus facere temporibus. Pariatur, dolor animi saepe vitae omnis tenetur blanditiis, culpa commodi veniam magnam deleniti labore officia possimus quam aperiam. Quaerat saepe iusto iure reiciendis voluptatem similique veniam magni ea. Enim blanditiis similique amet autem sit sapiente eaque, consectetur tenetur est. Facere optio enim tenetur, soluta debitis esse facilis, aliquam natus velit asperiores iure laboriosam qui perferendis obcaecati ad.`;

// const writeStream = fs.createWriteStream(
//   path.join(__dirname, " w.txt"),
//   "utf8"
// );
// writeStream.write("Hello, Nodejs Write Stream! \n");
// writeStream.write("Welcome to the Nodejs Stream Tutorial! \n");
// writeStream.write(`${hh}`);
// writeStream.end();

// writeStream.on("finish", () => { // TODO: finish event listener
//   console.log("Write Completed");
// });
