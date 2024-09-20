const express = require("express");
const dotenv = require("dotenv");
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
