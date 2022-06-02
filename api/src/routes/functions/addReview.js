const {User,Sneaker, Review} = require("../../db");

 const addReview = async (req, res )=>{
     
    const {title, review, rating, email, sneakerId }= req.body;
    const user = await User.findOne({
        where: {
            email: email
        }
    })
    if (user) {
        const newReview = await Review.create({
            title,
            review,
            rating,
            userId: user.id,
            sneakerId
        })
    }
    
    const reviews = await Review.findAll({
        where:{
            sneakerId: sneakerId
        }
    })
    let total = 0;
    for(let sn of reviews){
        total += sn.rating;
    }
    
    await Sneaker.update({
        rating: total / reviews.length
    },{
        where:{
            id: sneakerId
        }
    })
    res.status(201).send({msg:"review has been created"})
}

module.exports = addReview;