const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        min: 10,
        max: 50
     },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        requiered: true
    },
    city: {
        type: mongoose.Types.ObjectId,
        ref: 'cities',
        required: true
    },
    price: { 
        type: Number,
        required: true,
        min: 100,
        max: 1200
     },
    likes: { type: Array, required: true },
    tags: { type: Array, required: true },
    duration: { 
        type: Number, 
        required: true,
        min: 60,
        max: 120
     },

});

const Itinerary = mongoose.model(
    "itineraries",
    schema
);

module.exports = Itinerary;