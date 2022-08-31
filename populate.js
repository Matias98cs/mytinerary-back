require('dotenv').config()

//importamos la conexcion a la base de datos
const db = require('./config/database')

// importar los modelos que necesito
const City = require('./models/City')

City.create({
        city: "Santiago",
        country: "Chile",
        photo: "https://images-ext-1.discordapp.net/external/C8JeFrJbocuBahcumAfaHXxT3NtyVyIdfvGwB9oYG-M/%3Fv%3D4/https/avatars.githubusercontent.com/u/45239066?width=414&height=414",
        population: 321312,
        fundation: "2022-12-01",
        description: "Holaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }
)



