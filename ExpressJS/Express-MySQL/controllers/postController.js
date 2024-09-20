// controllers/postController.js
const multer = require("multer");
const Post = require("../models/postModel");
const User = require("../models/userModel");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
}).single("photo");

exports.index = async (req, res) => {
  const posts = await Post.findAll();
  res.render("posts/list", { posts });
};

exports.showCreateForm = async (req, res) => {
  const users = await User.findAll();
  res.render("posts/create", { users });
};

exports.create = async (req, res) => {
  //   console.log(req.body);
  upload(req, res, async (err) => {
    if (err) {
      console.error("Error uploading photo:", err);
      return res.status(500).send("Error uploading photo");
    }
    const { user_id, title, content } = req.body;
    const photo = req.file ? req.file.filename : null;

    try {
      await Post.create(user_id, title, content, photo);
      res.redirect("/posts");
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).send("Server Error");
    }
  });
};

exports.showEditForm = async (req, res) => {
  const post = await Post.findById(req.params.id);
  const users = await User.findAll();
  res.render("posts/edit", { post, users });
};

exports.update = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Error uploading photo:", err);
      return res.status(500).send("Error uploading photo");
    }
    const { title, content } = req.body;
    const photo = req.file ? req.file.filename : null;

    try {
      await Post.update(req.params.id, title, content, photo);
      res.redirect("/posts");
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).send("Server Error");
    }
  });
};

exports.delete = async (req, res) => {
  await Post.delete(req.params.id);
  res.redirect("/posts");
};
