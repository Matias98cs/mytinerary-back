const request = require('supertest')
const app = require('../app')
const {assert} = require('chai')

describe('POST /signup', function() {
    it('to return 200 and User already exists', function(done) {
        request(app)
            .post('/auth/signup')
            .send({
                name: "Example",
                photo: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
                lastname: "Sanchez",
                mail: "exampleSanchez@gmail.com",
                password: "example12345",
                country: "Cordoba",
                role: "user",
                from: "form"
            })
            .expect(200, done)
    })
    it('must respond with 200', function(done) {
        request(app)
            .post('/auth/signup')
            .send({
                name: "Example",
                photo: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
                lastname: "Sanchez",
                mail: "exampleSanchez@gmail.com",
                password: "example12345",
                country: "Cordoba",
                role: "user",
                from: "form"
            })
            .expect(200, done)
    })
    it('must respond with 400, mail invalid', function(done){
        request(app)
            .post('/auth/signup')
            .send({
                name: "Example-02",
                photo: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
                lastname: "Sanchez-02",
                mail: "exampom",
                password: "example2222222",
                country: "Cordoba",
                role: "admin",
                from: "google"
            })
            .expect(400, done)
    })
})