const City = require('../models/City');

const cityController = {
    create: async(req, res) => {
        // const {city, country, photo, population, fundation} = req.body
        try {
            await new City(req.body).save()
            res.status(201).json({
                message: 'City created',
                success: true
            })
        }catch(error) {
            res.status(400).json({
                message: 'Couldt create city',
                success: false
            })
        }
    }
}

module.exports = cityController;