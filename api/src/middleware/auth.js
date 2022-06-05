const admin = require('../config/firebase-config');

const ProtectedRoute = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
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