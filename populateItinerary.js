require('dotenv').config()
const db = require('./config/database')
const Itinerary = require('./models/Itinerary')

Itinerary.create(
    {
        //dublin
        name: "Cliffs of Moher Tour Including Wild Atlantic Way and Galway City from Dublin",
        user: "6318dcc22f30c8fd4cdf4f8a",
        city: "6318dc411a295018ff915fc4",
        price: 4233,
        likes: ["4234"],
        tags: ["#dublin", "#mountain"],
        duration: 46
    },
    {
        //Egypt
        name: "From Cairo: Half-Day Tour to Pyramids of Giza and the Sphinx",
        user: "6318dcc22f30c8fd4cdf4f88",
        city: "6318dc411a295018ff915fc5",
        price: 432,
        likes: ["24123"],
        tags: ["#cairo", "#egypt"],
        duration: 5
    },
    {
        //Mallorca
        name: "Palma de Mallorca: Half-Day Catamaran Tour with Buffet Meal",
        user: "6318dcc22f30c8fd4cdf4f89",
        city: "6318dc411a295018ff915fc6",
        price: 432,
        likes: ["2425"],
        tags: ["#spain", "#mallorca"],
        duration: 6
    },
    {
        //Paris
        name: "Eiffel Tower Direct Access Tour to Summit by Elevator",
        user: "6318dcc22f30c8fd4cdf4f8a",
        city: "6318dc411a295018ff915fc7",
        price: 4325,
        likes: ["543768"],
        tags: ["#paris", "#francia"],
        duration: 4  
    },
    {
        //Paris
        name: "Louvre Museum Timed-Entrance Ticket",
        user: "6318dcc22f30c8fd4cdf4f8a",
        city: "6318dc411a295018ff915fc7",
        price: 4325,
        likes: ["432546"],
        tags: ["#paris", "#francia"],
        duration: 3
    },
    {
        //abu dhabi
        name: "Louvre Abu Dhabi: Entry Tickets",
        user: "6318dcc22f30c8fd4cdf4f88",
        city: "6318dc411a295018ff915fc2",
        price: 353,
        likes: ["534745"],
        tags: ["#abudhabi", "#hi"],
        duration: 4
    },
    {
        //abu dhabi
        name: "Abu Dhabi: Desert Safari with BBQ, Camel Ride & Sandboarding",
        user: "6318dcc22f30c8fd4cdf4f88",
        city: "6318dc411a295018ff915fc2",
        price: 253,
        likes: ["89554"],
        tags: ["#abudhabi", "#hi"],
        duration: 3
    },
    {
        //sydey
        name: "Taronga Zoo Tickets",
        user: "6318dcc22f30c8fd4cdf4f89",
        city: "6318dc411a295018ff915fc9",
        price: 253,
        likes: ["7856"],
        tags: ["#sydey", "#hi"],
        duration: 3
    },
    {
        //sydey
        name: "Harbor Cruise with 2-Course Premium Lunch",
        user: "6318dcc22f30c8fd4cdf4f89",
        city: "6318dc411a295018ff915fc9",
        price: 253,
        likes: ["12316"],
        tags: ["#sydey", "#hi"],
        duration: 3
    },
    {
        //cambodia
        name: "Angkor Wat: Small-Group Sunrise Tour",
        user: "6318dcc22f30c8fd4cdf4f8a",
        city: "6318dc411a295018ff915fc3",
        price: 110,
        likes: ["54363"],
        tags: ["#cambodia", "#eat"],
        duration: 4
    },
    {
        //cambodia
        name: "Phnom Penh: 1-Hour ana 30 Minutes Mekong River Sunset Cruise",
        user: "6318dcc22f30c8fd4cdf4f8a",
        city: "6318dc411a295018ff915fc3",
        price: 210,
        likes: ["31242"],
        tags: ["#cambodia", "#fly"],
        duration: 1
    },
    {
        //cambodia
        name: "Kulen Mountain: Full-Day Private Waterfall Tour",
        user: "6318dcc22f30c8fd4cdf4f8a",
        city: "6318dc411a295018ff915fc3",
        price: 310,
        likes: ["423"],
        tags: ["#cambodia", "#code"],
        duration: 2
    },
    {
        //valencia
        name: "Sailing Catamaran Cruise with Swim Stop",
        user: "6318dcc22f30c8fd4cdf4f88",
        city: "6318dc411a295018ff915fcb",
        price: 310,
        likes: ["1245"],
        tags: ["#valencia", "#flipo"],
        duration: 2
    },
    {
        //valencia
        name: "Flamenco Show at El Toro y La Luna with a Drink",
        user: "6318dcc22f30c8fd4cdf4f88",
        city: "6318dc411a295018ff915fcb",
        price: 310,
        likes: ["31256"],
        tags: ["#valencia", "#hello"],
        duration: 2
    },
    {
        //valencia
        name: "Oceanogràfic Entrance Ticket",
        user: "6318dcc22f30c8fd4cdf4f88",
        city: "6318dc411a295018ff915fcb",
        price: 310,
        likes: ["3125765"],
        tags: ["#valencia", "#hostia"],
        duration: 2
    },
    {
        //bariloche
        name: "Cerro Catedral Ski Passes, Equipment, & Transfers",
        user: "6318dcc22f30c8fd4cdf4f89",
        city: "6318dc411a295018ff915fcc",
        price: 60,
        likes: ["5232"],
        tags: ["#bariloche", "#che"],
        duration: 2
    },
    {
        //bariloche
        name: "San Martín de los Andes por 7 Lagos",
        user: "6318dcc22f30c8fd4cdf4f89",
        city: "6318dc411a295018ff915fcc",
        price: 60,
        likes: ["425"],
        tags: ["#bariloche", "#che"],
        duration: 2
    },
    {
        //bariloche
        name: "Full-Day Circuito Grande & Villa Traful Road Trip",
        user: "6318dcc22f30c8fd4cdf4f89",
        city: "6318dc411a295018ff915fcc",
        price: 60,
        likes: ["54325"],
        tags: ["#bariloche", "#che"],
        duration: 2
    }
)
