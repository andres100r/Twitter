

const dbManager = require ('../database/db.manager');

/**
 * Creation of an user
 * @param {*} userObject JSON Object with User information
 */
async function createUser (req, res) {
    
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    
    // CREATING THE OBJECT TO PERSIST
    const newUserObject = {
        username: req.body.username,
        creation_date: req.body.creation_date
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.User.create(newUserObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
    }







/**
 * consultar usuarios
 * @param {*} req
 * @param {*} res
 */


 async function findAllUsers (req, res){
    try {
        const users = await dbManager.User.findAll ();//ejecuta el Query
        res.json({ data: users });//Send response
    } catch (e) {
        console.log(e);// imprime el error en la consola
        res.status(500).send({ message: "Some error occurred" });// envia un mensaje de error
    }
}


/**
 * consultar usuario por id
 */

async function findOneUser (req, res){
    try {
         //lee el parametro
        const { idUser } = req.params;//Execute query
        /*la linea 1 hace lo mismo uqe las lineas 2 y 3
       1 const {idUser, idPost} = req.params;
       2 const idUser = req.body.username,
       3 const idPost = req.body.creation_date
        */
       //ejecuta el query
        const user = await dbManager.User.findOne({ where: { idUser: idUser } });
        res.json(user);//Send response
    } catch (e) {
        console.log(e);// imprime el error en la consola
        res.status(500).send({ message: "Some error occurred" });// envia un mensaje de error
    }
}


/**
 * Update user
 */
async function updateUser (req, res){
    /**
     * TASK:
     * IMPLEMENT THE FUNCTION______________________- 
     */
}

/**
* Delete an existen user by username
* @param {*} req 
* @param {*} res 
*/
function deleteUserByUsername (req, res){ 
    /**
     * TASK:
     * IMPLEMENT THE FUNCTION______________________- 
     */

}

/**
* 
* @param {*} req 
* @param {*} res 
*/
function deleteAllUsers (req, res){
    /**
     * TASK:
     * IMPLEMENT THE FUNCTION______________________- 
     */
}

/**
* 
* @param {*} req 
* @param {*} res 
*/
function findAllUsersByCreatedDate (req, res){
    /**
     * TASK:
     * IMPLEMENT THE FUNCTION______________________- 
     */
}




    exports.findOneUser= findOneUser;
    exports.createUser = createUser;
    exports.findAllUsers= findAllUsers;
    exports.updateUser = updateUser;
    exports.deleteUserByUsername = deleteUserByUsername;
    exports.deleteAllUsers = deleteAllUsers;
    exports.findAllUsersByCreatedDate = findAllUsersByCreatedDate;
