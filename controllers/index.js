let { userData } = require("../gistfile1")

const getUser = (req, res) =>{
    try {
        const { params: {id} } = req
        const currentUSer = userData.find( user =>  user.id == id )

        const {
            firstName,
            lastName,
            maidenName,
            email,
            age,
            address,
            company
        } = currentUSer

        res.send({
            status: 200,
            user : {
                fullname: `${firstName} ${lastName} ${maidenName}`,
                email: email,
                age: age,
                address: address,
                jobTitle: company.title
            } 
        })

    } catch (error) {
        res.send(error)
    }
}

const updateAddress = (req, res) =>{
    try {
        const {params: {id}} = req
        const {body: {newAddress}} = req

        const currentUser = userData.find( user =>  user.id == id )
        const statusValue = (currentUser == undefined) ? 404 : 200

        const updatedUser = {
            ...currentUser,
            "address": newAddress
        }

        res.send({
            status: statusValue,
            user: updatedUser
        })
        

    } catch (error) {
        res.send(error)
    }
}

const createUser = (req, res) => {
    try {
        const {body: {email}} = req
        console.log(req)
        const newID = Math.round( Math.random() * 500 + 5 )
        const newUser = {
            id: newID,
            email: email
        }
        userData = [...userData, newUser]

        res.send( userData.map( u => `${u.id}, ${u.email}` ) )

    } catch (error) {
        res.send(error)
    }
}

const deleteUser = (req, res) => {
    try {
        const {params : {id}} = req
        const currentUser = userData.find( user =>  user.id == id )
        const index = userData.indexOf(currentUser)

        delete userData[index];

        res.send( userData.map( user => `${user.id}, ${user.email}` ) )
        

    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getUser,
    updateAddress,
    createUser,
    deleteUser
}