require('dotenv').config()

const db = require('./config/database')
const User = require('./models/User')

User.create({
    name: "Matias",
    lastname: "Jorgito",
    mail: "mati@jorgito.com",
    password: "mati1234",
    photo: "https://pbs.twimg.com/profile_images/1003643864907993088/eF0VVprg_400x400.jpg",
    country: "Argentina"
},
{
    name: "Javier",
    lastname: "Panzer",
    mail: "javi@panzer.com",
    password: "javi1234",
    photo: "https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2021/08/Diego-Peretti-El-Planeta-Urbano-retrato-2.jpg?resize=640%2C959&ssl=1",
    country: "Argentina"
},
{
    name: "Brian",
    lastname: "Maluma",
    mail: "brian@maluma.com",
    password: "brian1234",
    photo: "https://media.revistagq.com/photos/5ca5f6084409cc61e490adac/4:3/w_1912,h_1434,c_limit/cavill_sin_bigote_3806.png",
    country: "Mexico"
}
)