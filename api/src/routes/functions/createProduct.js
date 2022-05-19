const { Sneaker, Model } = require("../../db")

const createProduct = async (req, res) => {

  const { modelId, match, description, material, image, price, color } = req.body

  const newProduct = await Sneaker.create({
    modelId,
    price,
    match,
    image,
    color,
    description,
    material,
  })
    .then(results => {
      return results.addModel(modelId)
    })
  res.status(201).send(newProduct)

}

module.exports = createProduct;

// brand,
// sizes,
// categories

// brand, sizes, categories 