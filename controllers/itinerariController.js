const Itinerary = require('../models/Itinerary')

const itineraryController = {
    createItinerary: async(req, res) => {
        try{
            let itinerary = await new Itinerary(req.body).save()
            res.status(201).json({
                message: 'Created',
                response: itinerary,
                success: true
            })
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: 'Dont created',
                message: false
            })
        }
    },
    modifItinerary: async(req, res) => {
        const {id} = req.params
        const user = req.body
        let userDb
        try{
            userDb = await new Itinerary.findOneAndUpdate({_id:id}, user, {new: true})
            if(userDb){
                res.status(200).json({
                    message: 'User modified',
                    response: userDb,
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "Couldn't modified user",
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: "Could't obtain user",
                success: false
            })
        }
    }
}


module.exports = itineraryController