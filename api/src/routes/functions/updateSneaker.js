
const { Sneaker, Model, Size } = require("../../db")


const updateSneaker = async (req, res) => {
  const { id } = req.params
  const props = req.body
  try {
    if (id) {
      const sneaker = await Sneaker.findByPk(id,{
        attributes: { exclude: ['colorId', 'modelId'] },
        include: { all: true, nested: true }})
      if (!sneaker) {
        res.status(404).send({ msg: "The sneaker does not exist" });
      }

      // const newData = await sneaker.update({price: props.price})
      if (props.price) {
        sneaker.price = props.price;
        await sneaker.save()
      }
      

      const model = await Model.findByPk(sneaker.model.id, {include: { all: true, nested: true }})
      var newSizes = []
      props.sizes.forEach( n => {
        newSizes.push(n)
        model.sizes.map(async(s, i) => {
          if(s.numberSize == n.numberSize){
            newSizes = newSizes.filter(ns => ns.numberSize != n.numberSize)
            await model.sizes[i].modelsize.update({stock: n.stock})
          }
        })
      });

      newSizes.map(async n => {
        const [siz, created] = await Size.findOrCreate({
          where: { numberSize: n.numberSize },
        });
        await model.addSize(siz || created, { through: { stock: n.stock } });
      } )

      if (sneaker) {
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