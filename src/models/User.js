const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    photo: String,
  },
  { timestamps: true }
);

module.exports = User = model("User", UserSchema);
