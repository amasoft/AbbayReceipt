const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    post_title: {
      type: String,
      required: [true, "post title required"],
      unique: true,
    },
    post_content: {
      type: String,
      required: [true, "post contents title required"],
    },
    post_image: {
      type: String,
      required: [true, "post image required"],
    },
    author_id: {
      type: String,
      required: [true, "Author Id required"],
    },
    author_name: {
      type: String,
      required: [true, "Author name required"],
    },
    post_category: {
      type: String,
      required: [true, "post category required"],
    },
    post_status: {
      type: String,
      required: [true, "post status required"],
    },
    totalcomments: {
      type: Number,
      required: true,
    },
    post_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Post_Table", PostSchema);
