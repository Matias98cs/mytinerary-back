const Comment = require('../models/Comment')
const Joi = require("joi");

const validator = Joi.object({
    comment: Joi.string().min(1).max(100).message("INVALID_COMMENT"),
    user: Joi.string(),
    itinerary: Joi.string()
});

const commentController = {
    createComment: async (req, res) => {
        try {
            let result = await validator.validateAsync(req.body)
            let comment = await new Comment(req.body).save()
            res.status(201).json({
                message: 'Created',
                response: comment,
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
    },
    modifyComment: async (req, res) => {
        const { id } = req.params
        try {
            let result = await validator.validateAsync(req.body)
            let comments = await Comment.findOne({ _id: id});
            if (comments) {
                await Comment.findOneAndUpdate({ _id: id},req.body,{ new: true });
                res.status(200).json({
                    message:'Comments modified',
                    success: true
                });
            } else {
                res.status(404).json({
                    message: "Couldn't modified comment",
                    success: false,
                });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: error.message,
                success: false,
            });            
        }
    }

}

module.exports = commentController