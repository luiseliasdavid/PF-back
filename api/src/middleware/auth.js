const admin = require('../config/firebase-config');

const ProtectedRoute = async (req, res, next) => {
    console.log(req.headers)
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token)
    try {
        const decodeValue = await admin.auth().verifyIdToken(token);
        if (decodeValue) {
            req.user = decodeValue;
            return next();
        }
        return res.json({ msg: "Unauthorized route" });
    } catch (error) {
        return res.json({ msg: 'Internal Error' });
    }
}

module.exports = ProtectedRoute;