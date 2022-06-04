const { Discount } = require("../../db");

const getDiscounts = async (req, res) => {
  const discounts = await Discount.findAll();
  console.log(discounts)
  res.json(discounts);
}

module.exports = getDiscounts;