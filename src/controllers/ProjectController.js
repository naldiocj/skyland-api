const Project = require("../models/Project");

module.exports = {
  async index(req, res) {
    const { name } = req.query;

    let projects = [];

    if (!name) {
      projects = await Project.find();
    } else {
      projects = await Project.find({
        provinceName: name,
      });
    }

    return res.json(projects);
  },
  async store(req, res) {
    await Project.create(req.body);

    return res.status(201).json();
  },
  async show(req, res) {
    const project = await Project.findById(req.params.id);

    return res.json(project);
  },
  update(req, res) {
    return res.json({ message: "ok" });
  },
  delete(req, res) {
    return res.json({ message: "ok" });
  },
};
