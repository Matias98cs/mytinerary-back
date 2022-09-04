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
        const filter = {id: id}
        const newData = {
            name: req.body.name,
            user: req.body.user,
            city: req.body.city,
            price: req.body.price,
            likes: req.body.likes,
            tags: req.body.tags,
            duration: req.body.duration,
        }
        let userDb
        try{
            userDb = await Itinerary.findOneAndUpdate(filter, newData, {
                new: true,
                upsert: true,
                rawResult: true
            })
            if(userDb){
                res.status(200).json({
                    message: 'Itinerary modified',
                    response: userDb,
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "Couldn't modified itinerary",
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: "Could't obtain itinerary",
                success: false
            })
        }
    },
    deleteItinerary: async(req, res) => {
        const {id} = req.params
        let itinerary
        try{
            itinerary = await Itinerary.findOneAndDelete({_id: id})
            if(itinerary){
                res.status(200).json({
                    message: 'Itinerary deleted',
                    success: true
                })
            }else{
                res.status(404).json({
                    message: 'Couldnt find itinerary',
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: "Couldnt obtain city",
                success: false
            })
        }
    }
}


module.exports = itineraryController