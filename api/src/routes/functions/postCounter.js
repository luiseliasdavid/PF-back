const {Hot} = require("../../db");
//48h * 60min * 60sec * 1000millisecond -> 172800000 milliseconds
const createHot = async (req, res) => {
    const {name,counter} = req.body;
    const now = new Date();
    const countNumber = parseInt(counter, 10);
    const hotSale = await Hot.create({
        name,
        counter: (((countNumber*60)*60)*1000) + now.getMilliseconds()
    })
    res.send(hotSale);
}

module.exports = createHot;