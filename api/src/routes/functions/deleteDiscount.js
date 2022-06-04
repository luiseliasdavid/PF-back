const {Sneaker, Discount} = require("../../db");



async function restoreD(id){
    const sneaker = await Sneaker.findByPk(id)
    sneaker.discountPrice = 0
    sneaker.save()
    console.log("sin descuento" ,sneaker.discountPrice)
}



const deleteDiscount = async (req,res)=>{
    const id = req.params.id
    
    const discount = await Discount.findByPk(id)
    if (discount) {
        if(discount.deleted === false ) {
            restoreD(discount.sneakerId)
            discount.deleted = true
            await discount.save()
        }

        res.json({msg: `the state of Discount ${discount.id} has been change to disabled = ${discount.deleted}`})
    }else{
        res.send('the discount doesnt exist')
    }
}

module.exports = deleteDiscount;