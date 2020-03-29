
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
router.post('/', userController.createUser);

router.get('/', userController.findAllUsers);


router.get('/:idUser', userController.findOneUser);


module.exports = router;
