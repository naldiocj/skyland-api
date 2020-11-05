const Project = require("../models/Project");

module.exports = {
  async store(req, res) {
    const { filename: cover } = req.file;
    const { id } = req.params;
    console.log(cover);
    const project = await Project.findById(id);
    project.photos.push(cover);
    await project.save();

    return res.status(201).json();
  },

  delete(req, res) {
    return res.json({ message: "ok" });
  },
};
