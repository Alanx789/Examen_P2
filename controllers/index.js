const {userData} = require('../gistfile1.js')

const getUser = async (req, res) => {
    try {
        const { params: {id} } = req
        const user = userData.find( (u) => {u.id === id} )
        
        const value = (user===undefined) ? {status:404} : {status:200} 
        res.send(value)

    } catch (error) {
        res.send( {status : 500} )
    }
}



const updateAdress = async (req, res) => {

    try {
        const {params: {id} } = req
        console.log(id)
        res.send({
            status : 200,
        })

        const user = userData.find( (u) => { u == id} )

        const value = (user===undefined) ? {status:404} : {status:200} 
        res.send(value)

    } catch (error) {
        res.send( {status : 500 })
    }
}


module.exports = {
    getUser,
    updateAdress
}