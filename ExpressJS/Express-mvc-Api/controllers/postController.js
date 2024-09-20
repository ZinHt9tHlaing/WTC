const { default: axios } = require("axios");

const API = "http://localhost:3001/posts";

const getAllPosts = async (req, res) => {
  try {
    // const { _sort, _order, ...filters } = req.body;
    // const res = await axios.get(API, {
    //   params: {
    //     ...filters,
    //     _sort,
    //     _order,
    //   },
    // });
    const response = await axios.get(API);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const response = await axios.get(`${API}/${req.params.id}`);
    if (response.data) {
      res.status(200).json(response.data);
    } else {
      res.status(400).json({ error: "Post not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createPost = async (req, res) => {
  try {
    const response = await axios.post(API, req.body);
    console.log(response)
    res.status(201).json({
      success: "Post created successfully",
      data: response.data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const response = await axios.put(`${API}/${req.params.id}`,req.body);
    res.status(200).json({
      success: "Post updated successfully",
      data: response.data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const response = await axios.delete(`${API}/${req.params.id}`);
    console.log(response)
    res.status(201).json({
      success: "Post deleted successfully",
      data: response.data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllPosts, getPostById, createPost,updatePost ,deletePost};
