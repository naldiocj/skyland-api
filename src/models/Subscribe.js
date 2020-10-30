const { Schema, model } = require("mongoose");

const SubscribeSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Subscribe = model("Subscribe", SubscribeSchema);
