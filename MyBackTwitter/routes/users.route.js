
var express = require('express');
var router = express.Router();
//const userController = require ('../controllers/user.controller'); 
const userController = require ('../controllers/user.controller'); 

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

/* GET users listing. */
//router.get('/', userController.createUser);
module.exports = router;
