const admin = require('../../config/firebase-config');
const { User } = require('../../db')

async function disable(uid, disable){
  admin.auth()
    .updateUser(uid, {  
        disabled: disable,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully updated user');
  })
  .catch((error) => {
    console.log('Error updating user:', error);
  });
}

const updatedDisableUser = async (req, res) => {
  const { id } = req.params
  try {
    if (id) {
      const user = await User.findByPk(id)

      if (user) {
        user.deleted = !user.deleted
        await user.save()

        disable(id, user.deleted)

        res.json({msg: `the user ${user.nameUser} has been change disable to ${user.deleted}`})
      }
      else{
        res.send('the user doesnt exists')
      }
      
    }
  } catch (error) {
    res.status(404).send({ msg: "error" }, error)
  }
    
}

module.exports = updatedDisableUser;