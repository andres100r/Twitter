const dbManager = require ('../database.config/db.manager');

 /* Creacion / JSON Object
 * @param {*} userObject  
 */
async function createFollower (req, res) {      
    if (!req.body) { // Compruebe si esta vacio
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newFollowerObject = {// Creacion de Objeto
        followername: req.body.followername,
        creation_date: req.body.creation_date,
        idUser: req.body.idUser
    }
    dbManager.Follower.create(newFollowerObject).then (// Ejecutar Crear y Insertar en BD 
        data => { res.send (data); }
    ).catch (
        e => {
            console.log(e);// Error en Consola
            res.status(500).send({ message: "Some error occurred" });// Mensaje de Error
        }
    );
}
/**
 * GET con todos los usuarios
 */
async function findAllFollowers (req, res){
    try {
        const Followers = await dbManager.Follower.findAll ();//Ejecutar Solicitud
        res.json({ data: Followers });// Enviar Respuesta
    } catch (e) {
        console.log(e);// Error de Impresion en Consola
        res.status(500).send({ message: "Some error occurred" });// Mensaje de Error
    }
}
/**
 * Get Usuarios
 */
async function findOneFollower (req, res){
    try {
        const { idFollower } = req.params;//Ejecutar Solicitud
        const Follower = await dbManager.Follower.findOne({ where: { idFollower: idFollower } });
        res.json(Follower);//Enviar Respuesta
    } catch (e) {
        console.log(e);// Error de Impresion en Consola
        res.status(500).send({ message: "Some error occurred" });// Mensaje de Error 
    }
}
/**
 * Update Usuarios
 */
async function updateFollower (req, res){
    if (!req.body) {
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newFollowerObject = {
        followername: req.body.followername,
        creation_date: req.body.creation_dater,
        idUser: req.body.idUser
    }
    const { idFollower } = req.params;
    console.log("Follower: " + idFollower);
    dbManager.Follower.update(newFollowerObject, { where: { idFollower: idFollower } }).then (
        data => { res.send (newFollowerObject); }
    ).catch (
        e => {
            console.log(e);
            res.status(500).send({ message: "Some error occurred" });
        }
    );
}
/**
 * Delete un usuario existente 
 * @param {*} req 
 * @param {*} res 
 */
function deleteFollowerByFollower (req, res){ 
    const { follower } = req.params;
    dbManager.Follower.destroy( { where: { followername: follower } })
    .catch (
        e => {
            console.log(e);
            res.status(500).send({ message: "Some error occurred" }); 
        }
    );
}
/**
 * @param {*} req 
 * @param {*} res 
 */
function deleteAllFollowers (req, res){
    dbManager.Follower.destroy( { where: {} } ) 
    .catch (
        e => {
            console.log(e);
            res.status(500).send({ message: "Some error occurred" });
        }
    );
}

exports.createFollower = createFollower; 
exports.findAllFollowers = findAllFollowers; 
exports.findOneFollower = findOneFollower; 
exports.updateFollower = updateFollower;
exports.deleteFollowerByFollower = deleteFollowerByFollower;
exports.deleteAllFollowers = deleteAllFollowers;
