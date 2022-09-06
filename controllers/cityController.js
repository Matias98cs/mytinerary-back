const City = require('../models/City');

const cityController = {
    create: async (req, res) => {

        try {
            let citi = await new City(req.body).save()
            res.status(201).json({
                message: 'City created',
                success: true,
                id : citi.id
            })
        } catch (error) {
            res.status(400).json({
                message: 'Couldt create city',
                success: false
            })
        }
    },
    readId: async (req, res) => {
        const { id } = req.params
        try {
            let city = await City.findOne({ _id: id })
            //si city existe retorno un json con los datos
            //si city no existe => city = {} retorno un json con 404
            if (city) {
                res.status(200).json({
                    message: 'Get one city',
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find city",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't obtain city",
                success: false
            })
        }
    },
    modify: async (req, res) => {
        const { id } = req.params

        try {
            let city = await City.findOne({ _id: id })
            if (city) {
                await City.findOneAndUpdate({ _id: id }, req.body, { new: true })
                res.status(200).json({
                    message: "City Updated",
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Couldn't city update",
                    success: false
                })
            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't obtain city",
                success: false
            })
        }
    },
    readAll: async (req, res) => {
        let cities
        let citi
        let query = {}

        if (req.query.city) {
            query.city = req.query.city
        }

        try {
            cities = await City.find(query)
            citi = await City.find({ city: { $regex: "^" + query.city } }).exec()
            if (citi.length > 0) {
                res.status(200).json({
                    message: 'Name City find',
                    response: citi,
                    success: true
                })
            } else {
                res.status(200).json({
                    message: "Cities find",
                    response: cities,
                    success: true
                })
            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't obtain cities",
                success: false
            })

        }
    },
    deletecity: async (req, res) => {
        const { id } = req.params
        let city
        try {
            city = await City.findOneAndDelete({ _id: id })
            if (city) {
                res.status(200).json({
                    message: 'City deleted',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find city",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't obtain city",
                success: false
            })
        }
    },
    citiesAll: async (req, res) => {
        let citiesFind
        try {
            citiesFind = await City.find()
            res.status(200).json({
                message: "Cities",
                response: citiesFind,
                success: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'Cities not found ',
                success: false
            })
        }
    }
}

module.exports = cityController;