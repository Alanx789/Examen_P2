const express = require('express')
const {
    getUser,
    updateAddress, 
    createUser,
    deleteUser}= require('../controllers')

const router = express.Router()

router.get('/get-user-data/:id', getUser)
router.put('/update-user-address/:id', updateAddress)
router.post('/create-user', createUser)
router.delete('/delete-user/:id', deleteUser)

module.exports = {
    router
}

/*  Create User
    request: {email: "email"}
    response : [ {id, email} ]      --Lista de todos los usuarios

    Delete User
    response: [ {id, email} ]       --Lista de usuarios sin el que fue borrado alv
 */