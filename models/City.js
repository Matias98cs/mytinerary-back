const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    city: { 
        type: String,
        required: true,
        min: 4,
        max: 50,
     },
    country: { 
        type: String, 
        required: true,
        min: 4,
        max: 50,
     },
    photo: { 
        type: String,
        required: true,
        validate: function(value){
            if(!value.startsWith('http')){
                throw new Error('La URL debe comenzar con http')
            }
        }
     },
    population: { 
        type: Number,
        required: true,
        min: 1000,
        max: 1000000000
     },
    fundation: { 
        type: Date,
        required: true,
        max: new Date()
     },
    description: { 
        type: String,
        min: 10,
        max: 300
     },
});

const City = mongoose.model(
    "cities",
    schema
);

module.exports = City;
