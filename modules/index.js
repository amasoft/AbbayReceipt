const express = require("express");
const postRoute = require("./post/postsRoute");
const router = express.Router();

router.use("/posts", postRoute);
module.exports = router;
