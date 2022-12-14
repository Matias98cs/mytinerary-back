const Comment = require('../models/Comment')

const commentController = {
    createComment: async (req, res) => {
        try {
            let comment = await new Comment(req.body).save()
            res.status(201).json({
                message: 'Created',
                response: comment,
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
        let commentFind 
        let query = {}
        if(req.query.itinerary){
            query.itinerary = req.query.itinerary
        }
        try {
            commentFind = await Comment.find(query)
                .populate('itinerary')
            if (commentFind) {
                res.status(200).json({
                    message: "Itinerary",
                    response: commentFind,
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

module.exports = commentController