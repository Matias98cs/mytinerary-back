const City = require('../models/City');

const cityController = {
    create: async(req, res) => {
        // const {city, country, photo, population, fundation} = req.body
        try {
            await new City(req.body).save()
            res.status(201).json({
                message: 'City created',
                success: true
            })
        }catch(error) {
            res.status(400).json({
                message: 'Couldt create city',
                success: false
            })
        }
    },
    read: async(req, res) => {
        const {id} = req.params
        try{
            let city = await City.findOne({_id:id})
            //si city existe retorno un json con los datos
            //si city no existe => city = {} retorno un json con 404
            if(city){
                res.status(200).json({
                    message: 'Get one city',
                    response: city,
                    success: true
                })
            }else {
                res.status(404).json({
                    message: 'Couldt find city',
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: "Could't obtain city",
                success: false
            })
        }
    },
    modify: async(req, res) => {
        const {id} = req.params
        const city = req.body
        let cityDb
        try{
            cityDb = await City.findOneAndUpdate({_id:id}, city, {new:true})
            if(cityDb){
                res.status(200).json({
                    message: 'City modificado',
                    success: true
                })
            }else {
                res.status(404).json({
                    message: 'Couldt find city',
                    success: false
                })
            }
        
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: "Could't obtain city",
                success: false
            })
        }
    },
    deletecity: async(req, res) => {
        const {id} = req.params
        let city
        try{
            city = await City.findOneAndDelete({_id:id})
            if(city){
                res.status(200).json({
                    message: 'City delete',
                    success: true
                })
            }else{
                res.status(404).json({
                    message: 'Couldt find city',
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: "Could't obtain city",
                success: false
            })
        }
    }
}

module.exports = cityController;