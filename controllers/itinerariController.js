const Itinerary = require('../models/Itinerary')
const Joi = require('joi')

const validator = Joi.object(
    {
        name: Joi.string().min(10).max(50).message('INVALID_NAME'),
        user: Joi.string(),
        city: Joi.string(),
        price: Joi.number().min(100).max(1200).message('INVALID_PRICE'),
        likes: Joi.array(),
        tags: Joi.array(),
        duration: Joi.number().min(60).max(120).message('INVALID_DURATION')
    }
)

const itineraryController = {
    createItinerary: async (req, res) => {
        try {
            let result = await validator.validateAsync(req.body)
            let itinerary = await new Itinerary(req.body).save()
            res.status(201).json({
                message: 'Created',
                response: itinerary,
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },
    modifItinerary: async (req, res) => {
        const { id } = req.params

        try {
            let itinerary = await Itinerary.findOne({ _id: id })
            if (itinerary) {
                await Itinerary.findOneAndUpdate({ _id: id }, req.body, { new: true })
                res.status(200).json({
                    message: 'Itinerary modified',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Couldn't modified itinerary",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Could't obtain itinerary",
                success: false
            })
        }
    },
    deleteItinerary: async (req, res) => {
        const { id } = req.params
        let itinerary
        try {
            itinerary = await Itinerary.findOneAndDelete({ _id: id })
            if (itinerary) {
                res.status(200).json({
                    message: 'Itinerary deleted',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'Couldnt find itinerary',
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldnt obtain city",
                success: false
            })
        }
    },
    readAll: async (req, res) => {
        let itineraryFind 
        let query = {}
        if(req.query.user){
            query.user = req.query.user
        }
        if(req.query.city){
            query.city = req.query.city
        }
        try {
            itineraryFind = await Itinerary.find(query)
                .populate('city')
                .populate('user')
            if (itineraryFind) {
                res.status(200).json({
                    message: "Itinerary",
                    response: itineraryFind,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'Couldnt find itinerary',
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'Itineraries not found ',
                success: false
            })
        }
    }
}


module.exports = itineraryController
