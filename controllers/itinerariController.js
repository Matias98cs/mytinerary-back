const Itinerary = require('../models/Itinerary')

const itineraryController = {
    createItinerary: async (req, res) => {
        try {
            let itinerary = await new Itinerary(req.body).save()
            res.status(201).json({
                message: 'Created',
                response: itinerary,
                success: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'Dont created',
                message: false
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
    readFromCity: async (req, res) => {
        const { id } = req.params
        let itineraryFind
        try {
            itineraryFind = await Itinerary.find({ city: id })
                .populate('city')
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
