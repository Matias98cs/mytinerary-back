const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

describe('POST /cities', function () {
    it('must respond with the id', function (done) {
        request(app) 
            .post('/cities')
            .send({
                city: "Javi",
                country: "Hola",
                photo: "asdasd",
                population: 123456,
                fundation: 2022-01-01,
                description: "...",
            })
            .then(response => {
                assert.isString(response.body.id)
                done()
            })            
    })
})

    it('must respond with 200 status code', function (done) {
        request(app) 
            .get('/cities')
            .send({})
            .expect(200, done) 
            
    })

    it('must respond with 400 status code', function (done) {
        request(app)
            .post('/cities')
            .send({})
            .expect(400, done) 
            
    })
