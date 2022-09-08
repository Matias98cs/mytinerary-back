require('dotenv').config()
const db = require('./config/database')
const Activity = require('./models/Activity')

Activity.create(
    //dublin
    {
        name: "Dublin Zoo",
        photo: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSr85A14GcyJgBOlQZ3CGMAEDYn_C0L00795X5UGaGEDUVElAMBc42b4CnhruVbfVnE897wGD_LMiIXdA3HA6Bk1Q",
        itinerary: "6318f095385d752e21ab9fe1"
    },
    {
        name: "Dublin's castle",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0iaCnxBkSdbeCWACogipjR7kv0GSVOqwcFHUT1DwzjyPrpDNVevbU5vSkMZnb3J4trtyA2LhM2Q4oOO91DnYl9g",
        itinerary: "6318f095385d752e21ab9fe1"
    },
    {
        name: "National Gallery of Ireland",
        photo: "https://www.codart.nl/wp-content/uploads/2017/06/National-Gallery-of-Ireland-2017-scaled.jpg",
        itinerary: "6318f095385d752e21ab9fe1"
    },
    //Egypt
    {
        name: "Pyramids of Giza",
        photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/72/a7/17.jpg",
        itinerary: "6318f096385d752e21ab9fe2"
    },
    {
        name: "Little Buddha Bar",
        photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ff/9d/6d.jpg",
        itinerary: "6318f096385d752e21ab9fe2"
    },
    {
        name: "Egyptian Museum, Citadel And Khan Khalili Bazaar Visit",
        photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/c1/f5/4c.jpg",
        itinerary: "6318f096385d752e21ab9fe2"
    },
    //Mallorca
    {
        name: "boat ride and old train",
        photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/6f/6b/0e.jpg",
        itinerary: "6318f096385d752e21ab9fe3"
    },
    {
        name: "Cuevas del Drach with boat ride and concert",
        photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/d5/ca.jpg",
        itinerary: "6318f096385d752e21ab9fe3"
    },
    {
        name: "private food tour",
        photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/6b/6f/4e.jpg",
        itinerary: "6318f096385d752e21ab9fe3"
    },
    //Paris
    {
        name: "Louvre Museum",
        photo: "https://www.toursbylocals.com/images/guides/12/12889/201946071000726.jpg",
        itinerary: "6318f096385d752e21ab9fe4"
    },
    {
        name: "Eiffel Tower",
        photo: "https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg",
        itinerary: "6318f096385d752e21ab9fe4"
    },
    {
        name: "Tour to Summit by Elevator",
        photo: "https://cdn.getyourguide.com/img/tour/ec6742f78caf8b6e.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fe4"
    },
    {
        name: "Sunset Aperitif",
        photo: "https://cdn.getyourguide.com/img/tour/f124b8cf69d00a6d.jpeg/98/Paris--Sunset-Aperitif-Cruise-on-the-Seine-River-with-Music.jpg",
        itinerary: "6318f096385d752e21ab9fe6"
    },
    {
        name: "Seine River Sightseeing",
        photo: "https://cdn.getyourguide.com/img/tour/5e048e8bbad80.jpeg/98/Paris--Seine-River-Sightseeing-Cruise-with-3-Course-Dinner.jpg",
        itinerary: "6318f096385d752e21ab9fe6"
    },
    {
        name: "Hop-on Hop-off Bus Tour",
        photo: "https://cdn.getyourguide.com/img/tour/5e5f752584e61.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fe6"
    },
    //abu dhabi
    {
        name: "Camel Ride",
        photo: "https://cdn.getyourguide.com/img/tour/5cc19bbd28c2f.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9fe7"
    },
    {
        name: "Abu Dhabi Sheikh Zayed",
        photo: "https://cdn.getyourguide.com/img/tour/5cc19af22c67d.jpeg/98/From-Dubai--Abu-Dhabi-Sheikh-Zayed-Mosque-Guided-Tour.jpg",
        itinerary: "6318f096385d752e21ab9fe7"
    },
    {
        name: "Belly Dance & Tannura Dance",
        photo: "https://cdn.getyourguide.com/img/tour/631873394d904.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fe7"
    },
    {
        name: "Yas Marina Circuit",
        photo: "https://cdn.getyourguide.com/img/tour/5ef30f9f98e45.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fe5"
    },
    {
        name: "Half-Day Guided City Tour",
        photo: "https://cdn.getyourguide.com/img/tour/5cf24dee0be0a.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fe5"
    },
    {
        name: "Go City Explorer Pass",
        photo: "https://cdn.getyourguide.com/img/tour/59553b969ba6a.jpeg/98/Dubai--Go-City-Explorer-Pass---Choose-3-to-7-Attractions.jpg",
        itinerary: "6318f096385d752e21ab9fe5"
    },
    //sydney
    {
        name: "Unlimited Skyfeast at Sydney Tower",
        photo: "https://cdn.getyourguide.com/img/tour/34bd2dd70922193b.jpeg/98/Sydney--Unlimited-Skyfeast-at-Sydney-Tower.jpg",
        itinerary: "6318f096385d752e21ab9fe8"
    },
    {
        name: "Blue Mountains",
        photo: "https://cdn.getyourguide.com/img/tour/e2edf351ff60487c.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fe8"
    },
    {
        name: "Retro Party Cruise in Sydney Harbour with Snacks",
        photo: "https://cdn.getyourguide.com/img/tour/62eb6f3bc3dec.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9fe8"
    },
    {
        name: "Opera House Guided",
        photo: "https://cdn.getyourguide.com/img/tour/398e409057a0e141.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fe9"
    },
    {
        name: "Whale Watching Cruise with Breakfast or Lunch",
        photo: "https://cdn.getyourguide.com/img/tour/5ce923ee5bb45.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9fe9"
    },
    {
        name: "20-Minute Helicopter Ride over Sydney Harbou",
        photo: "https://cdn.getyourguide.com/img/tour/138b50bd4ecdb98d.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9fe9"
    },
    // cambodia
    {
        name: "Angkor Wat",
        photo: "https://cdn.getyourguide.com/img/tour/5c923177e2f7d.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9fea"
    },
    {
        name: "Private Sunrise Bike Tour from Siem Reap",
        photo: "https://cdn.getyourguide.com/img/tour/5e872c27cfb3e.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fea"
    },
    {
        name: "Kulen Waterfall",
        photo: "https://cdn.getyourguide.com/img/tour/629f750814d6c.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9fea"
    },
    {
        name: "Kompong Phluk Floating Village",
        photo: "https://cdn.getyourguide.com/img/tour/629f2620b7529.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9feb"
    },
    {
        name: "Prison and Killing Fields",
        photo: "https://cdn.getyourguide.com/img/tour/5aab9275c59e2.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9feb"
    },
    {
        name: "Phare, the Cambodian Circus",
        photo: "https://cdn.getyourguide.com/img/tour/5a7a8a35f40fc.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9feb"
    },
    {
        name: "Private Tour with Sunset",
        photo: "https://cdn.getyourguide.com/img/tour/5a9d37543956d.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fec"
    },
    {
        name: "Apsara Dance Show",
        photo: "https://cdn.getyourguide.com/img/tour/62d683844f001.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fec"
    },
    {
        name: "From Siem Reap",
        photo: "https://cdn.getyourguide.com/img/tour/62b68b58dbb24.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9fec"
    },
    //valencia
    {
        name: "Cruise with Swim Stop",
        photo: "https://cdn.getyourguide.com/img/tour/628612990b0e3.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9fed"
    },
    {
        name: "Hop-on Hop-off Bus",
        photo: "https://cdn.getyourguide.com/img/tour/5ca5d1f4eccb4.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9fed"
    },
    {
        name: "Palosanto Flamenco Show",
        photo: "https://cdn.getyourguide.com/img/tour/61448c16070f5.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fed"
    },
    {
        name: "Guided Bike Tour",
        photo: "https://cdn.getyourguide.com/img/tour/61448c16070f5.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fee"
    },
    {
        name: "Oceanogràfic Ticket",
        photo: "https://cdn.getyourguide.com/img/tour/5cacd07e8d8a2.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9fee"
    },
    {
        name: "Pub Crawl With Free Shots",
        photo: "https://cdn.getyourguide.com/img/tour/618834e7b05e6.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9fee"
    },
    {
        name: "Principe Felipe Science Museum",
        photo: "",
        itinerary: "6318f096385d752e21ab9fef"
    },
    {
        name: "Tuk-Tuk Tour",
        photo: "",
        itinerary: "6318f096385d752e21ab9fef"
    },
    {
        name: "Jeep Safari Mountain Adventure",
        photo: "",
        itinerary: "6318f096385d752e21ab9fef"
    },
    //Bariloche
    {
        name: "Lakes & Andes Road Trip",
        photo: "https://cdn.getyourguide.com/img/tour/5e46de9ef3d3f.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9ff0"
    },
    {
        name: "Lake Excursion to Victoria Island",
        photo: "https://cdn.getyourguide.com/img/tour/5d0bd56641691.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9ff0"
    },
    {
        name: "Small Circuit",
        photo: "https://cdn.getyourguide.com/img/tour/5148ca3100263.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9ff0"
    },
    {
        name: "Cerro Otto Cable Car",
        photo: "https://cdn.getyourguide.com/img/tour/5d20e2358735c.jpeg/97.jpg",
        itinerary: "6318f096385d752e21ab9ff1"
    },
    {
        name: "Cerro Tronador",
        photo: "https://cdn.getyourguide.com/img/tour/5db850751d7fa.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9ff1"
    },
    {
        name: "Cerro Campanario Chairlift",
        photo: "https://cdn.getyourguide.com/img/tour/5e4d46a08989c.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9ff1"
    },
    {
        name: "Horse Riding",
        photo: "https://cdn.getyourguide.com/img/tour/5da091b64a0d6.jpeg/98.jpg",
        itinerary: "6318f096385d752e21ab9ff2"
    },
    {
        name: "Footprint Tour",
        photo: "https://cdn.getyourguide.com/img/tour/5e838d479671d.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9ff2"
    },
    {
        name: "Full-Day El Bolsón and Puelo Lake Tour",
        photo: "https://cdn.getyourguide.com/img/tour/5d20a2bbef12a.jpeg/145.jpg",
        itinerary: "6318f096385d752e21ab9ff2"
    }

)