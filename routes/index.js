const express = require('express')
const {
    getUser,
    updateAdress } = require('../controllers/index')

const router = express.Router()

router.get('/get-user-data/:id', getUser)
router.put('/update-user-address/:id', updateAdress)

module.exports = {
    router
}