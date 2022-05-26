const { Sneaker, Material, Model, Brand, Size, Category } = require("../../db")

const createModel = async (req, res) => {
  const data = req.body

  const [brand, createdBrand] = await Brand.findOrCreate({
    where: { nameBrand: data.brand },
  });
  const [material, createdMaterial] = await Material.findOrCreate({
    where: { nameMaterial: data.material || 'none' },
  });

  const mat = material.toJSON() || createdMaterial.toJSON();
  const bra = brand.toJSON() || createdBrand.toJSON();

  try {
    const model = await Model.create({
      nameModel: data.name,
      description: data.description,
      brandId: bra.id,
      materialId: mat.id,
    });

    data.categories.forEach(async (category) => {
      const [cat, created] = await Category.findOrCreate({
        where: { nameCategory: category.value },
      });
      await model.addCategory(cat || created);
    });

    data.sizes.forEach(async (size) => {
      const [siz, created] = await Size.findOrCreate({
        where: { numberSize: size.name },
      });
      await model.addSize(siz || created, { through: { stock: size.stock } });
    });

    res.json({ msg: `the model ${model.nameModel} has been created`, model: model })

  } catch (error) {
    res.json({ msg: error })
  }


}

module.exports = createModel;

// brand,
// sizes,
// categories

// brand, sizes, categories 