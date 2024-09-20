const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("hello from simple server");
});

app.get("/about", (_req, res) => {
  res.status(404).send("About Page");
});

app.get("*", (_req, res) => {
  // todo: *က မရှိတဲ့routeကို သွားမယ်ဆိုရင် 404 errorကိုပြ
  res.status(404).send("<h1>page not found</h1>");
});

app.listen(PORT, () =>
  console.log(`server running at http://localhost:${PORT}`)
);
