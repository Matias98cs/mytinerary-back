const User = require('../models/User');
const crypto = require('crypto') // Propio de nodeJS, genera codigos aleatorios
const bcryptjs = require('bcryptjs');// Propio de nodeJs, hashea pass
const sendMail = require('./sendMail');
const Joi = require('joi')

const validator = Joi.object(
    {
        name: Joi.string().min(4).message('INVALID_NAME'),
        photo: Joi.string().uri().message('INVALID URL'),
        lastname: Joi.string().min(4).message('INVALID_LASTNAME'),
        mail: Joi.string().email({
            minDomainSegments: 2, tlds: {allow: ['com', 'ar']}
        }).message('INVALID_EMAIL'),
        password: Joi.string().min(8).max(15).message('INVALID_PASSWORD'),
        country: Joi.string().min(5).message('INVALID_COUNTRY'),
        role: Joi.string(),
        from: Joi.string(),
        logged: Joi.boolean(),
        verified: Joi.boolean(),
        code: Joi.string()        
    }
)

const userController = {
    signUp: async (req, res) => {
        let { name, photo, lastname, mail, password, country, role, from } = req.body
        
        try {
            let result = await validator.validateAsync({name, photo, lastname, mail, password, country, role, from})
            let user = await User.findOne({ mail })
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex')
                if (from === 'form') {
                    password = bcryptjs.hashSync(password, 10)
                    await validator.validateAsync({name, photo, lastname, mail, verified, logged, country, role, code })
                    user = await new User({ name, photo, lastname, mail, verified, logged, password: [password], country, role, from: [from], code }).save()
                    sendMail(mail, code)
                    res.status(201).json({
                        message: "User signed up from form",
                        success: true
                    })
                } else { // Desde redes sociales (Cualquiera)
                    password = bcryptjs.hashSync(password, 10)
                    verified = true
                    await validator.validateAsync({name, photo, lastname, mail, verified, logged, country, role, code })

                    user = await new User({ name, photo, lastname, mail, verified, logged, password: [password], country, role, from: [from], code }).save()
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
                        message: "User signed up from " + from,
                        response: user,
                        success: true
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },


    verifyMail: async (req, res) => {
        const { code } = req.params
        try {
            let user = await User.findOne({ code })
            if (user) {
                user.verified = true // Si lo encuentra cambia la propiedad 
                await user.save()
                res.redirect(301, 'https://my-tinerary-front-panzer.herokuapp.com')
            } else {
                res.status(404).json({
                    message: "Email has not account yet",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Could't verify account",
                success: false
            })
        }
    },

    singIn: async (req, res) => {
        const { mail, pass, from } = req.body

        try {
            const user = await User.findOne({ mail })

            if (!user) {
                res.status(404).json({
                    success: false,
                    message: "User doesn't exists, please sing up"
                })
            } else if (user.verified) {
                const checkPass = user.password.filter(passwordElement => bcryptjs.compareSync(pass, passwordElement))
                if (from == 'form') {
                    if (checkPass.length > 0) {

                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            mail: user.mail,
                            role: user.role,
                            photo: user.photo
                        }

                        user.logged = true
                        await user.save()

                        res.status(200).json({
                            success: true,
                            response: { user: loginUser },
                            message: 'Welcome ' + user.name
                        })

                    } else {
                        res.status(400).json({
                            success: false,
                            message: 'Username or password incorrect'
                        })
                    }
                }
            } else {
                res.status(400).json({
                    success: false,
                    message: 'Please, verify yout email account and try again'
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                success: false,
                message: 'Sign in ERROR, try again later'
            })
        }
    },

    singOut: async () => { },

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