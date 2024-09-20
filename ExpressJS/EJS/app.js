const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const users = [
    { id: 1, name: "Alice", age: 25, bio: "<strong>Developer</strong>" },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
  ];
  const items = ["item1", "item2", "item3"];
  res.render("index", { title: "Home", users: users, items });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
