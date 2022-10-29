const { userData } = require("../gistfile1")

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

        const currentUSer = userData.find( user =>  user.id == id )
        const statusValue = (currentUSer == undefined) ? 404 : 200

        const updatedUser = {
            ...currentUSer,
            address: newAddress
        }

        res.send({
            status: statusValue,
            user: updatedUser
        })
        

    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getUser,
    updateAddress
}