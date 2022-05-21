const { Model } = require("../../db")

const getModels = async (req, res) => {
  const models = await Model.findAll();
  res.send(models);
}

module.exports = getModels;