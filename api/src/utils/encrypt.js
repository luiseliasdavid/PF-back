const bcrypt = require('bcrypt');

const saltRounds = 10;

const encryptPass = (password) => {
    return bcrypt.hashSync(password, saltRounds);
}
module.exports = {
    encryptPass
}
