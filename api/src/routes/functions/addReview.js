const { User, Sneaker, Review } = require("../../db");

const addReview = async (req, res) => {
  try {
    const { title, review, rating, email, sneakerId } = req.body;
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      const newReview = await Review.create({
        title,
        review,
        rating,
        userId: user.id,
        sneakerId,
      });
      const reviews = await Review.findAll({
        where: {
          sneakerId: sneakerId,
        },
      });
      if (reviews) {
        let total = 0;
        for (let sn of reviews) {
          total += sn.rating;
        }

        await Sneaker.update(
          {
            rating: total / reviews.length,
          },
          {
            where: {
              id: sneakerId,
            },
          }
        );
      } else {
        await Sneaker.update(
          {
            rating: 0,
          },
          {
            where: {
              id: sneakerId,
            },
          }
        );
      }

      res.status(201).send({ msg: "review has been created", data: newReview });
    }
    res.status(201).send({ msg: "problem" });
  } catch (error) {
    console.log("Error fuction addReview");
  }
};

module.exports = addReview;
