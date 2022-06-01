const admin = require('../../config/firebase-config');
const updatedDisableUser = async (req, res) => {
    const {uid, disable}= req.body;
    admin.auth()
    .updateUser(uid, {  
        disabled: disable,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    res.send('Successfully updated user');
  })
  .catch((error) => {
    console.log('Error updating user:', error);
  });
}

module.exports = updatedDisableUser;