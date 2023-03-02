const request = require('supertest')
const app = require('../app')
const {asset} = require('chai')
const {TOKEN} = process.env

let token = TOKEN
//Crear comentario
describe('POST /comments', function (){
    it('Must respond with 201 status code', function (done) {
        request(app)
        .post('/comments/')
        .send({
            comment:"Hola javi",
            user:"632a28ccc5eeca83d3ce6d30",
            itinerary:"632b141247c627bb3a9f0741"
        })
        .set('Authorization', `Bearer ${token}`)
        .expect(201, done)
    })
    
})
//Leer comentarios
describe('GET /comments', function (){
    it('Must respond with 200 status code', function (done){
        request(app)
        .get('/comments/query')
        .send({
            itinerary:"632b141247c627bb3a9f0741"
        })
        .expect(200, done)
    })
})
//Modificar comentario
describe('PATCH /comments', function(){
    it('Must respond with 200 status code', function(done){
        request(app)
        .patch('/comments/632c7a759e711c6c30be77d3')
        .send({
            user:"632a28ccc5eeca83d3ce6d30",
            comment:"Modificado desde casa !",
            itinerary:"632b141247c627bb3a9f0741"
        })
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done)
    })
})
