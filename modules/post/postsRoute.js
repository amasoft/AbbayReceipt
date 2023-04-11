const router = require("express").Router();
// const User = require("../models/User");
const Post = require("./postModels");
const becrypt = require("bcrypt");
const {
  getAllPost,
  getPost,
  createPost,
  updatePost,
} = require("./postController");
//reate post
// router.post("/", async (req, res) => {
//   const newPost = new Post(req.body);
//   try {
//     const savedpost = await newPost.save();
//     if (savedpost) {
//       res.status(200).json({
//         status: 200,
//         message: "Post succesfully Added!",
//         data: savedpost,
//       });
//     }
//   } catch (err) {
//     // res.status(500).json(err);
//     console.log("error occured " + err);
//     res.status(500).json({
//       message: "error adding post",
//       error: err,
//     });
//   }
// });

// //getuser
// router.get("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     res.status(200).json(post);
//   } catch (err) {
//     console.log("my issue " + err);
//     res.send(500);
//   }
// });
//add post
router.post("/", createPost);
//update post
router.put("/:_id", updatePost);
//get all post
router.get("/", getAllPost);
// get single post
router.get("/:_id", getPost);

// update
// router.put("/:id", async (req, res) => {
//   const post = await Post.findById(req.params.id);
//   try {
//     if (post.username === req.body.username) {
//       try {
//         const updatedPost = await Post.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedPost);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("you can update only your post!");
//     }
//   } catch (err) {
//     console.log("my erro" + err);
//     res.status(500).json(err);
//   }
// });

// // delete
// // router.delete("/:id", async (req, res) => {
// router.delete("/:id", async (req, res) => {
//   console.log("welcome");
//   console.log("post infor" + req.params.id);
//   console.log("post infor" + req.body.username);

//   try {
//     const post = await Post.findById(req.params.id);
//     console.log("post infor" + JSON.stringify(post));
//     console.log("post req username" + req.body.id);

//     if (post.username === req.body.username) {
//       try {
//         await post.delete();
//         res.status(200).json("post has been deleted sucessfuly");
//       } catch (err) {
//         res.status(500).json(err);
//         console.log("issue" + err);
//       }
//     } else {
//       res.status(401).json("you can delete only your post!");
//     }
//   } catch (err) {
//     console.log("my erro" + err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
