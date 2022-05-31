const {Sneaker, Discount} = require("../../db");
const cron = require('node-cron');
var dateTime = require('node-datetime');



async function restoreD(id){
    const sneaker = await Sneaker.findByPk(id)
    sneaker.discountPrice = 0
    sneaker.save()
    console.log("sin descuento" ,sneaker.discountPrice)
}



const addOneSneakerCart = async (req,res)=>{
    const id = req.params.id
    const{discount, hours, days}=req.body;
    const sneaker = await Sneaker.findByPk(id,{include: { all: true, nested: true }})

    let dt = dateTime.create();
    let mlHours = hours ? hours * 3600000 : 0
    let mlDays = days ? days * 86400000 : 0
    const ml = mlDays + mlHours + dt.now()
    let expirationMl = dateTime.create(new Date(ml));
    const expiration = expirationMl.format('Y-m-d H:M:S')
    const date = dt.format('Y-m-d H:M:S');


    const newPrice = sneaker.price * ((100 - discount) / 100 )

    const newDiscount = await Discount.create({sneakerId: id, sneakerModel: sneaker.model.nameModel, percentage: discount, creation: date, expiration: expiration })
    console.log(sneaker.model.nameModel)
    sneaker.discountPrice = newPrice
    await sneaker.save()

    console.log('con descuento',sneaker.discountPrice)

    // if (days <= 32 && days > 0) {
    //     if(hours <= 23){
    //         cron.schedule(`* */${hours}/${days} * *`,() => restoreD(id))
    //     }else{
    //         cron.schedule(`* * */${days} * *`,() => restoreD(id))

    //     }
    // }else{
    //     if (hours <= 23 && hours > 0) {
    //         cron.schedule(`* */${hours} * * *`,() => restoreD(id))
    //     }
    // }

    cron.schedule('*/2 * * * *',() => restoreD(id))


    res.send('Producto agregado')
}

module.exports = addOneSneakerCart;