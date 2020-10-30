const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      required: true,
    },
    photos: [Image],
  },
  { timestamps: true }
);

module.exports = Post = model("Post", PostSchema);
