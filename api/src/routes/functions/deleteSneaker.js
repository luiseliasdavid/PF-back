const { Sneaker } = require("../../db");


const deleteSneaker = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const productDelete = await Sneaker.findByPk(id)
      if (!productDelete) {
        res.status(404).send({ msg: "The sneaker does not exist" });
      }
      const newStateProduct = await productDelete.update({ deleted: (!productDelete.deleted) })
      if (newStateProduct) {
        const show = productDelete.deleted ? "unavailable" : "available"
        res.json({
          msg: `The sneaker status is ${show}` 
        });
      } else {
        res.status(404).send({ msg: `Something went wrong` })
      }
    }
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports = deleteSneaker;
