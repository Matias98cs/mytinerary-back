const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        min: 10
     },
    photo: { 
        type: String, 
        required: true,
        validate: function(value){
            if(!value.startsWith('http')){
                throw new Error('The URL must start with http')
            }
        }
     },
    lastname: { 
        type: String, 
        required: true,
        min: 10

     },
    mail: { 
        type: String, 
        required: true,
        unique: true
     },
    password: [{ 
        type: String, 
        required: true,
     }],
    country: { 
        type: String,
        min: 4
    },
    role: {type: String, required: true},
    from:[ {type: String, required: true}],
    logged: {type: Boolean, required: true},
    verified: {type: Boolean, required: true},
    code: {type: String, required: true}
});

const User = mongoose.model(
    "users",
    schema
);

module.exports = User;