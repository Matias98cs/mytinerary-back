const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    photo: {
        type: String,
        required: true
    },
    itinerary: {
        type: mongoose.Types.ObjectId,
        ref: 'itineraries',
        required: true
    },

});

const Activity = mongoose.model(
    "Activities",
    schema
);
module.exports = Activity;