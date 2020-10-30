const { Schema, model } = require("mongoose");

const ImageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Image = model("Image", ImageSchema);
