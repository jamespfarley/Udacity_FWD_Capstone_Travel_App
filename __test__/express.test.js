// supertest to test HTTP reqests/responses
const request = require("supertest");

// index.js for correct routes
const index = require('../src/server/index');

describe( 'test server route', () => {
    test('GET method test', (done) => {
        request(index)
        .get("/test")
        .expect('Content-Type', /json/);
        done();
    });

    test('pixabay POST test', (done) => {
        request(index)
        .post("/pixabay")
        .send("pixabay")
        .expect('Content-Type', /json/);
        done();
    })

});
