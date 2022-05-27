const { Category } = require("../../db")

const createCategory = async (req, res) => {

  const { nameCategory } = req.body

  const [category, created] = await Category.findOrCreate({
    where: { nameCategory: nameCategory }
  })

  if (created) {
    res.send({ msg: "Se creó correctamente" });
  } else {
    res.send({ msg: "Ya se creó esa categoría anteriormente" });
  }

}

module.exports = createCategory