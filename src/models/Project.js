const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    provinceName: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    photos: [],
  },
  { timestamps: true }
);

module.exports = Project = model("Project", ProjectSchema);
