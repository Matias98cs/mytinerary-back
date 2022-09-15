const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')
const { func } = require('joi')

describe('POST /signin', function() {
    it('must respond with 404, User doesnt exists, please sing up', function(done){
        request(app)
            .post('/auth/signin')
            .send({
                mail: "example01@gmail.com",
                pass: "example12345",
                from: "form"
            })
            .expect(404, done)
    }),
    it('must respond with 400, Username or password incorrect', function(done) {
        request(app)
            .post('/auth/signin')
            .send({
                mail: "matias98cs@gmail.com",
                pass: "example12345",
                from: "google"
            })
            .expect(400, done)
    })
    it('must respond with 401, verify yout email account and try again', function(done){
        request(app)
            .post('/auth/signin')
            .send({
                mail: "PoloNorte@gmail.com",
                pass: "polo1234",
                from: "form"
            })
            .expect(401, done)
    })
})