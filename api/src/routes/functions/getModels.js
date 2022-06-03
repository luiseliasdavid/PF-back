const { Model } = require("../../db");

const getModels = async (req, res) => {
  try {
    const models = await Model.findAll();
    res.send(models);
  } catch (error) {
    console.log("Error fuction getMaterials");
  }
};

module.exports = getModels;
