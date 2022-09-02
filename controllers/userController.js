const User = require('../models/User');


const userController = {
    createUser: async(req, res) => {
        try{
            await new User(req.body).save()
            res.status(201).json({
                message: 'User created',
                success: true,
            })
        }catch{
            res.status(400).json({
                message: 'Couldt create user',
                success: false
            })
        }
    }
}


module.exports = userController;