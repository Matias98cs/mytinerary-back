const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')
const { TOKEN } = process.env

let token = TOKEN

describe('POST /cities', function () {
    it('must respond with 400 status code', function (done) {
        request(app)
            .post('/cities')
            .send({
                city: "Dublin",
                country: "Ireland",
                photo: "//pbs.twimg.com/profile_images/1003643864907993088/eF0VVprg_400x400.jpg",
                population: 4693812,
                fundation: "",
                description: "The area of Dublin Bay has been inhabited by humans since prehistoric times, fish traps discovered from excavations during the construction"
            })
            .set('Authorization', `Bearer ${token}`)
            .expect(400, done)

    })
}),

    describe('POST /cities', function () {

        it('must respond with 200 status code', function (done) {
            request(app)
                .get('/cities')
                .send({
                    city: "Javi",
                    country: "Hola",
                    photo: "asdasd",
                    population: 123456,
                    fundation: 2022 - 01 - 01,
                    description: "...",

                })
                .expect(200, done)

        })

    })

