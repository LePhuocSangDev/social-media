const express = require("express");
const { createPost, deletePost, getAllPost } = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router.route("/post").get(getAllPost);
router.route("/post/delete/:id").delete(deletePost);

module.exports = router;
