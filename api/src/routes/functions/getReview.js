const {Review, User} = require("../../db");

const getReviews = async (req, res) => {
    const {id} = req.params;
    try {
        if(!isNaN(id)){
        const reviews = await Review.findAll({
            where:{
                sneakerId: id
            },
            include:{
                model: User,
                attributes: ['nameUser']
            }
        });
        res.send(reviews);
    }else{
        res.status(400).send({msg: "bad request: verify id"})
    }
    } catch (error) {
        res.status(500).send({msg: "Something has gone wrong"})
    }
}

module.exports =getReviews;
  
  