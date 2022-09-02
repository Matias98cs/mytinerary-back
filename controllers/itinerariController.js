const Itinerary = require('../models/Itinerary')


const itineraryController = {
    createItinerary: async(req, res) => {
        try{
            await new Itinerary(req.body).save()
            res.status(201).json({
                message: 'Crated',
                success: true
            })
        }catch{
            res.status(400).json({
                message: 'Dont crated',
                message: false
            })
        }
    }
}


module.exports = itineraryController