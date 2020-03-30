
var express = require('express');
var router = express.Router();
//const userController = require ('../controllers/user.controller'); 
const userController = require ('../controllers/user.controller'); 

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

/* Crear usuario. */
//exports.createUser = createUser;
router.post('/', userController.createUser);

//exports.findAllUsers= findAllUsers;
router.get('/', userController.findAllUsers);

//exports.findOneUser= findOneUser;
router.get('/:idUser', userController.findOneUser);

/**
 * PUT Route to update an user by id
 */
//exports.updateUser = updateUser;
router.put ('/:idUser',userController.updateUser);
/**
 * DELETE Route to delete an user by username
 */
//exports.deleteUserByUsername = deleteUserByUsername;
router.delete ('/:username',userController.deleteUserByUsername);
/**
 * DELETE Route to delete all users
 */
//exports.deleteAllUsers = deleteAllUsers;
router.delete ('/',userController.deleteAllUsers);


/**
 * TASK:
 * ADD THE MISSING ROUTES ______________________________________________________ 
 */
//exports.findAllUsersByCreatedDate = findAllUsersByCreatedDate;
router.get('/:creation_date', userController.findOneUser);




module.exports = router;
