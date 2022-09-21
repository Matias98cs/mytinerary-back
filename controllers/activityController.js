const Activity = require('../models/Activity')
const City = require('../models/City')
const Joi = require("joi");

const validator = Joi.object({
    name: Joi.string().min(5).max(50).message("INVALID_NAME"),
    photo: Joi.string().uri().message("INVALID URL"),
    itinerary: Joi.string(),
});

const activityController = {
    createActivity: async (req, res) => {
        try {
            let result = await validator.validateAsync(req.body)
            let activity = await new Activity(req.body).save()
            res.status(201).json({
                message: 'Created',
                response: activity,
                success: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false
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
    },
    updateActivity: async(req, res) => {
        const {id} = req.params
        try{
            let result = await validator.validateAsync(req.body)
            let activity = await Activity.findOne({_id: id})
            if (activity){
                await Activity.findOneAndUpdate({_id:id}, req.body, {new: true})
                res.status(200).json({
                    message: 'Activity update',
                    success: true,
                    response: activity
                })
            }else {
                res.status(404).json({
                    message: "Couldn't activity update",
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    }

}

module.exports = activityController