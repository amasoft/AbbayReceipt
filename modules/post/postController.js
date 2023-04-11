const Post = require("./postModels");
exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedpost = await newPost.save();
    if (savedpost) {
      res.status(200).json({
        status: 200,
        message: "Post succesfully Added!",
        data: savedpost,
      });
    }
  } catch (err) {
    console.log("error occured " + err);
    res.status(500).json({
      message: "error adding post",
      error: err,
    });
  }
};
exports.getAllPost = async (req, res) => {
  {
    // const username=req.query.user
    const username = "faith";
    const author_id = "10202020202";
    const catName = "health";
    try {
      let posts;
      if (author_id) {
        console.log("if block", "posts here");
        posts = await Post.find({ author_id }); //username:username is same as {username} if only they have same spelling
      } else if (catName) {
        console.log("eles if block", "posts here");

        posts = await Post.find({
          post_category: {
            $in: [catName], //i.e check if categories is among the catName array returned and assigned the result to posts
          },
        });
      } else {
        console.log("eles block", "posts here");
        posts = await Post.find({});
      }
      console.log(posts.length, "posts here");
      res.status(200).json({
        status: 200,
        message: "post retrived Succesfully!!",
        data: posts,
        post_num: posts.length,
      });
      // return
    } catch (err) {
      console.log("my issue " + err);
      res.status(500).json(err);
    }
  }
};

exports.getPost = async (req, res) => {
  try {
    const { _id } = req.params;
    const post = await Post.findById(_id);
    res.status(200).json(post);
  } catch (err) {
    console.log("my issue " + err);
    res.send(500);
  }
};
exports.updatePost = async (req, res) => {
  const { _id } = req.params;

  const post = await Post.findById(_id);
  console.log("details" + post);
  try {
    // if (post.username === req.body.username) {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        _id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({
        message: "post updated succesfully!",
        updatedPost,
      });
    } catch (err) {
      res.status(500).json(err);
    }
    // } else {
    //   res.status(401).json("you can update only your post!");
    // }
  } catch (err) {
    console.log("my erro" + err);
    res.status(500).json({
      message: "Error updating post!",
      err,
    });
  }
};
