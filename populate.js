require('dotenv').config()

//importamos la conexcion a la base de datos
const db = require('./config/database')

// importar los modelos que necesito
const City = require('./models/City')

City.create({
        city: "Abu dhabi",
        country: "United Arab Emirates",
        photo: "https://images.pexels.com/photos/1589237/pexels-photo-1589237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population:  1512000,
        fundation: 1971-12-02,
        description: "The area surrounding Abu Dhabi is full of archaeological evidence from historical civilizations, such as the Umm an-Nar Culture, which dates back from the third millennium BC. Other settlements were also found farther outside the modern city of Abu Dhabi, including the eastern and western regions of the Emirate."
    },
    {
        city: "Cambodia",
        country: "Dominican Republic",
        photo: "https://images.pexels.com/photos/2495575/pexels-photo-2495575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 86489,
        fundation: 1953-11-09,
        description: "Cambodia is a country in Southeast Asia whose landscape encompasses low-lying plains, the Mekong Delta, mountains, and the coast of the Gulf of Thailand. Phnom Penh, its capital, is home to the art deco-style Central Market, the gleaming royal palace, and the archaeological and historical exhibits of the National Museum. In the northwest of the country are the ruins of Angkor Wat, a massive stone temple complex built during the Khmer Empire."
    },
    {
        city: "Dublin",
        country: "Ireland",
        photo: "https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 4693812 ,
        fundation: 1922-04-17,
        description: "The area of Dublin Bay has been inhabited by humans since prehistoric times, fish traps discovered from excavations during the construction of the Convention Centre Dublin indicate human habitation as far back as 6,000 years ago while further traps were also discovered closer to the old settlement of the city of Dublin on the south quays near St. James's Gate which also indicate mesolithic human activity."
    },
    {
        city: "Egypt ",
        country: "Cairo",
        photo: "https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 102674145,
        fundation: 1953-06-18,
        description: "Egypt, officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia via a land bridge formed by the Sinai Peninsula. It is bordered by the Mediterranean Sea to the north, the Gaza Strip of Palestine and Israel to the northeast, the Red Sea to the east, Sudan to the south, and Libya to the west. The Gulf of Aqaba in the northeast separates Egypt from Jordan and Saudi Arabia. Cairo is the capital and largest city of Egypt, while Alexandria, the second-largest city, is an important industrial and tourist hub at the Mediterranean coast. At approximately 100 million inhabitants, Egypt is the 14th-most populated country in the world. "
    },
    {
        city: "Mallorca",
        country: "Spain",
        photo: "https://images.pexels.com/photos/5522391/pexels-photo-5522391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 896038,
        fundation: 1229-12-31,
        description: "Palma also known as Palma de Mallorca, officially between 1983-88, 2006-08, and 2012-16) is the capital and largest city of the autonomous community of the Balearic Islands in Spain. It is situated on the south coast of Mallorca on the Bay of Palma. The Cabrera Archipelago, though widely separated from Palma proper, is administratively considered part of the municipality. As of 2018, Palma Airport serves over 29 million passengers per year."
    },
    {
        city: "Paris",
        country: "Frace",
        photo: "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 2161000,
        fundation:  1789-05-05 ,
        description: "The oldest traces of human occupation in Paris, discovered in 2008 near the Rue Henri-Farman in the 15th arrondissement, are human bones and evidence of an encampment of hunter-gatherers dating from about 8000 BC, during the Mesolithic period. Between 250 and 225 BC, the Parisii, a sub-tribe of the Celtic Senones, settled on the banks of the Seine, built bridges and a fort, minted coins, and began to trade with other river settlements in Europe."
    },
    {
        city: "Rio de Janeiro",
        country: "Brazil",
        photo: "https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 6748000 ,
        fundation:  1565-03-01,
        description: "Rio de Janeiro has the second-largest municipal GDP in the country, and 30th-largest in the world in 2008. This is estimated at about R$343 billion. It is headquarters to Brazilian oil, mining, and telecommunications companies, including two of the country's major corporations, Petrobras and Vale, and Latin America's largest telemedia conglomerate, Grupo Globo. The home of many universities and institutes, it is the second-largest center of research and development in Brazil, accounting for 17 percent of national scientific output according to 2005 data. Despite the high perception of crime, the city actually has a lower incidence of crime than most state capitals in Brazil."
    },
    {
        city: "Sydney",
        country: "Australia",
        photo: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg",
        population: 5312000 ,
        fundation: 1788-02-26 ,
        description: "Sydney, the capital of New South Wales, Australia. It is Australia's oldest and largest city with a population of around 4 million. Sydney is built around a huge harbour and hosts many tourist attractions as well as a number of beaches, bays and a couple of national parks."
    },

    {
        city: "Tokio",
        country: "Japon",
        photo: "https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 51490796 ,
        fundation: 1457-01-01 ,
        description: "Tokyo is the administrative, cultural, financial, commercial, and educational centre of Japan and the focus of an extensive urban complex that includes Kawasaki and Yokohama. Attractions include the Imperial Palace, encircled by stone-walled moats and broad gardens, and numerous temples and shrines."
    },
    {
        city: "Valencia",
        country: "Spain",
        photo: "https://images.pexels.com/photos/13292641/pexels-photo-13292641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 789744,
        fundation: 1229-12-31,
        description: "Valencia is Spain's third largest city and it offers tourism for all tastes. The city brings together historic and modern culture. In the old town (El Carmen) you will find a gothic cathedral, a modernist food market and a Rococo palace all in easy walking distance of each other."
    },
    {
        city: "Bariloche",
        country: "Argentina",
        photo: "https://images.pexels.com/photos/13395515/pexels-photo-13395515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 238205,
        fundation:  1902-05-03,
        description: "Located in Argentina's Río Negro province, Bariloche is a city surrounded by thousand-year-old forests, mountains covered in snow and crystal clear lakes. It's quintessentially Patagonian. A city that is home to excellence and surrounded by some of the country's most beautiful natural spots. Welcome to Bariloche."
    },
    {
        city: "Cancun",
        country: "Mexico",
        photo: "https://images.pexels.com/photos/2914305/pexels-photo-2914305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 888797,
        fundation:  1970-04-20,
        description: "Its beautiful scenery framed by white sand beaches and turquoise sea; its extension and biodiversity in its reefs, lagoons, cenotes and forest; its ancestral Mayan culture wealth; its great air and ground transportation connectivity and; its highest level hotel infrastructure have positioned Cancún, Quintana Roo, as the most awarded Mexican tourist destination in the world and as a leader city in Latin America."
    },
    {
        city: "La Havana ",
        country: "Cuba",
        photo: "https://images.pexels.com/photos/8249890/pexels-photo-8249890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 2130000,
        fundation:  1868-10-10,
        description: "Havana, Spanish La Habana, city, capital, major port, and leading commercial centre of Cuba. It also constitutes one of Cuba's 15 provinces: Ciudad de la Habana (City of Havana). The city is located on La Habana (Havana) Bay on the island's north coast."
    },
    {
        city: "Lilongwe",
        country: "Malaui",
        photo: "https://images.pexels.com/photos/3714900/pexels-photo-3714900.jpeg",
        population: 989318,
        fundation: 1947-02-01,
        description: "Lilongwe is the capital and most populated city of the African country of Malawi. It has a population of 989,318 as of the 2018 Census, up from a population of 674,448 in 2008. In 2020 that figure was 1,122,000."
    },
    {
        city: "San Luis",
        country: "Argentina",
        photo: "https://viajamosjuntos.com.ar/wp-content/uploads/2020/07/Paisaje-de-Merlo-san-luis.jpg",
        population: 502003,
        fundation: 1820-03-01,
        description: "San Luis, city, capital of San Luis provincia (province), west-central Argentina. It is located on the Chorrillos River, near the southern end of the foothills of the Sierra de San Luis. Founded in 1594 by order of the governor of Chile, it was abandoned during wars with the Araucanian Indians."
    },
)



