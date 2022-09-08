const Activity = require('../models/Activity')

const activityController = {
    createActivity: async (req, res) => {
        try {
            let activity = await new Activity(req.body).save()
            res.status(201).json({
                message: 'Created',
                response: activity,
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
    readAll: async (req, res) => {
        let activityFind 
        let query = {}
        if(req.query.itinerary){
            query.itinerary = req.query.itinerary
        }
        try {
            activityFind = await Activity.find(query)
                .populate('itinerary')
            if (activityFind) {
                res.status(200).json({
                    message: "Activity",
                    response: activityFind,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'Couldnt find Activity',
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

module.exports = activityController