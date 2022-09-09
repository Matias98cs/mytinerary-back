const User = require('../models/User');
const crypto = require('crypto') // Propio de nodeJS, genera codigos aleatorios
const bcryptjs = require('bcryptjs');// Propio de nodeJs, hashea pass
const sendMail = require('./sendMail');

const userController = {
    signUp: async (req, res) => {
        let { name,
            photo,
            lastname,
            mail,
            password,
            country,
            role,
            from } = req.body
        try {
            let user = await User.findOne({ mail })
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex')
                if (from === 'form') {
                    password = bcryptjs.hashSync(password, 10)
                    user = await new User({ name, photo, lastname, mail,verified, logged, password: [password], country, role, from: [from], code }).save()
                    sendMail(mail, code)
                    res.status(201).json({
                        message: "User signed up from form",
                        success: true
                    })
                } else { // Desde redes sociales (Cualquiera)
                    password = bcryptjs.hashSync(password, 10)
                    verified = true
                    user = await new User({ name, photo, lastname, mail,verified, logged, password: [password], country, role, from: [from], code }).save()
                    res.status(201).json({
                        message: "User signed up from form " + from,
                        success: true
                    })
                }
            } else { // Si existe el usuario
                if (user.from.includes(from)) {
                    res.status(200).json({
                        message: "User already exists",
                        response: user,
                        success: false
                    })
                } else { // user.from = ['google','facebook']
                    user.from.push(from)
                    user.verified = true
                    user.password.push(bcryptjs.hashSync(password, 10))
                    await user.save() //Guardar los cambios
                    res.status(201).json({
                        message: "User signed up from "+from,
                        response: user,
                        success: true
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "could't signed up",
                success: false
            })
        }
    },

    verifyMail: async () => { },

    singIn: async () => {},

    singOut: async () => {},

    createUser: async (req, res) => {
        try {
            let user = await new User(req.body).save()
            res.status(201).json({
                message: 'User created',
                response: user,
                success: true,
            })
        } catch {
            res.status(400).json({
                message: 'Couldt create user',
                success: false
            })
        }
    }
}



module.exports = userController;