const { Sneaker } = require("../../db");


const deleteSneaker = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const productDelete = await Sneaker.findByPk(id)
      if (!productDelete) {
        res.status(404).send({ msg: "The sneaker does not exist" });
      }
      if (productDelete.deleted) {
        res.status(404).send({ msg: "The sneaker has already been deleted" });
      }
      const newStateProduct = await productDelete.set({ deleted: true })
      if (newStateProduct) {
        res.json({
          msg: "The sneaker has been deleted",
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
