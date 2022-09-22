const request = require('supertest')
const app = require('../app')

//Leer itinerarios
describe('GET /itineraries', function(){
    it('Must respond with 200 status code', function (done){
        request(app)
        .get('/itineraries/query')
        .expect(200, done)
    })
})