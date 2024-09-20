const User = require("../models/userModel");
const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  destination: "./public/uploads/user",
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
  const users = await User.findAll();
  res.render("users/list", { users }); // todo: render to view(list.ejs)
};

exports.showCreateForm = (req, res) => {
  res.render("users/create"); // todo: render to view(create.ejs)
};

exports.create = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create(name, email, password);
  res.redirect("/users");
};

exports.showEditForm = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("users/edit", { user });
};

exports.update = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Error uploading photo:", err);
      return res.status(500).send("Error uploading photo");
    }
    const { name, email } = req.body;
    const photo = req.file ? req.file.filename : null;

    try {
      await User.update(req.params.id, name, email, photo);
      res.redirect("/users");
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).send("Server Error");
    }
  });
};

exports.delete = async (req, res) => {
  await User.delete(req.params.id);
  res.redirect("/users");
};
