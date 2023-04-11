const mongoose = require("mongoose");
const CategroySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("amadi", CategroySchema);
