const admin = require('../config/firebase-config'); 
const listAllUsers = (nextPageToken) => {
  // List batch of users, 1000 at a time.
  console.log("si")
    // admin.auth()
    //   .listUsers(1, nextPageToken)
    //   .then((listUsersResult) => {
    //     listUsersResult.users.forEach((userRecord) => {
    //       console.log('user', userRecord.toJSON());
    //     });
    //     if (listUsersResult.pageToken) {
    //       // List next batch of users.
    //       listAllUsers(listUsersResult.pageToken);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log('Error listing users:', error);
    //   });
};
// Start listing users from the beginning, 1000 at a time.





module.exports = listAllUsers;