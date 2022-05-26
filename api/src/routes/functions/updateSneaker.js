const { Sneaker } = require("../../db")


const updateSneaker = async (req, res) => {
  const { id } = req.params
  const props = req.body
  console.log(props, 'aquiiiii')
  try {
    if (id) {
      const sneaker = await Sneaker.findByPk(id)
      if (!sneaker) {
        res.status(404).send({ msg: "The sneaker does not exist" });
      }

      const newData = await sneaker.update(props)
      console.log(newData)
      if (newData) {
        res.json({
          msg: "The sneaker has been updated",
        });
      } else {
        res.status(404).json({ msg: `Something went wrong` })
      }
    }
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports = updateSneaker;