const { Schema, model } = require("mongoose");

const EventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    provinceName: {
      type: String,
    },
    cover: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Event = model("Event", EventSchema);
