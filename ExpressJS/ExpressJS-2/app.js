const fs = require("fs");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" } // todo: log fileတွေက တစ်ကြောင်းပြီးသွားတာနဲ့ အောက်ကို ဆင်းသွား
);
app.use(morgan("combined", { stream: accessLogStream }));

// logging middleware
app.use((req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(`[${timeStamp}] ${req.method} request for ${req.url}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

let books = [
  { id: 1, title: "SunShine", author: "Zin Htet" },
  { id: 2, title: "Flower", author: "Zaw Zaw" },
];

app.get("/", async (req, res) => {
  //   console.log(req.query);
  try {
    const searchQuery = req.query.query ? req.query.query.toLowerCase() : "";
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery)
    );
    res.status(200).render("index", { books: filteredBooks, searchQuery });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/books", async (req, res) => {
  //   console.log(req.query);
  try {
    const searchQuery = req.query.query ? req.query.query.toLowerCase() : "";
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery)
    );
    res.status(200).render("index", { books: filteredBooks, searchQuery });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/books/search", async (req, res) => {
  try {
    const searchQuery = req.query.query.toLowerCase();
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery)
    );
    res.status(200).render("index", { books: filteredBooks, searchQuery });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/books/new", async (req, res) => {
  try {
    res.status(200).render("form", { book: null });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/books", async (req, res) => {
  // console.log(req.body);
  try {
    const newBook = {
      id: books.length + 1,
      title: req.body.title,
      author: req.body.author,
    };
    books.push(newBook);
    res.status(201).redirect("/books");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/books/:id/edit", async (req, res) => {
  console.log(req.params);
  try {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).render("form", { book });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/books/:id", async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  try {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    book.title = req.body.title;
    book.author = req.body.author;
    res.status(200).redirect("/books");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/books/:id", (req, res) => {
  try {
    books = books.filter((book) => book.id !== parseInt(req.params.id));
    res.status(200).redirect("/books");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
