const {Sneaker, Discount, User} = require("../../db");
const cron = require('node-cron');
var dateTime = require('node-datetime');
const emailer = require('./emailer')



async function restoreD(id, discountId){
    const sneaker = await Sneaker.findByPk(id)
    sneaker.discountPrice = 0
    sneaker.save()
    console.log("sin descuento" ,sneaker.discountPrice)

    const d = await Discount.findByPk(discountId)
    if (d) {
        d.deleted = true
        d.save()
    }
}


const addDiscount = async (req,res)=>{
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


    

    if (sneaker.discountPrice > 0) {
        res.json({msg: `the sneaker have already a discount`})
    }else{
        const newDiscount = await Discount.create({sneakerId: id, sneakerModel: sneaker.model.nameModel,image:sneaker.image ,percentage: discount, creation: date, expiration: expiration })
        sneaker.discountPrice = newPrice
        await sneaker.save()

        const users = await User.findAll()
        const usersEmails = users.map(u => u.email)
        const emails = usersEmails.join()
        emailer(emails, `new Discount`,"discount",sneaker.image,discount ,sneaker.nameModel, expiration )

        console.log('con descuento',sneaker.discountPrice, newDiscount.id)

        if (days <= 32 && days > 0) {
            if(hours <= 23){
                cron.schedule(`* * ${hours} ${days} * *`,() => restoreD(id,newDiscount.id))
            }else{
                cron.schedule(`* * * ${days} * *`,() => restoreD(id, newDiscount.id))

            }
        }else{
            if (hours <= 23 && hours > 0) {
                cron.schedule(`* * ${hours} * * *`,() => restoreD(id,newDiscount.id))
            }
        }
        res.send('Producto agregado')
    }
    
}

module.exports = addDiscount;