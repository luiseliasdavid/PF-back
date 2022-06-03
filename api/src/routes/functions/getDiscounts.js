const { Discount } = require("../../db");

const getDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.findAll();
    console.log(discounts);
    res.json(discounts);
  } catch (error) {
    console.log("Error fuction discounts");
  }
};

module.exports = getDiscounts;
