const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    itinerary: { type: String, },
    
});

const Activity = mongoose.model(
    "Activities",
    schema
);

module.exports = Activity;