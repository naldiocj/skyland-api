const Event = require("../models/Event");

module.exports = {
  async index(req, res) {
    const { name } = req.query;

    let events = [];

    if (!name) {
      events = await Event.find();
    } else {
      events = await Event.find({
        provinceName: name,
      });
    }

    return res.json(events);
  },

  async store(req, res) {
    const { filename: cover } = req.file;
    const data = {
      ...req.body,
      cover,
    };
    await Event.create(data);

    return res.status(201).json();
  },

  async show(req, res) {
    const event = await Event.findById(req.params.id);

    return res.json(event);
  },
};
