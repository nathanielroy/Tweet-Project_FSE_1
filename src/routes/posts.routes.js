const router = require("express").Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  timelinePost,
  usersAllPosts,
} = require("../controllers/post");

router.get("/api/test/postBoard", [authJwt.verifyToken], controller.postBoard);

//create tweet
router.post("/post_tweet", createPost);

//update a post
router.put("/:id", updatePost);

//delete a post
router.delete("/:id", deletePost);

//like / dislike a post
router.put("/:id/like", likePost);

//get a post
router.get("/:id", getPost);

//get timeline posts
router.get("/timeline/:userId", timelinePost);

//get user's all posts
router.get("/profile/:username", usersAllPosts);

module.exports = router;
