const dbManager = require ('../database.config/db.manager');

/**
 * Creation of an user
 * @param {*} userObject JSON Object with User information
 */
async function createUser (req, res) {    
    console.log(req.body);
    if (!req.body) {// valida que el cuerpo no este vacio
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newUserObject = {// creacion del objeto
        username: req.body.username,
        creation_date: req.body.creation_date
    }
    dbManager.User.create(newUserObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        error => {
            console.log(error);// imprime el error en la consola
            res.status(500).send({ message: "Some error occurred" });// muestra el mensaje de error
        }
    );
}


exports.createUser=createUser;