const request = require("supertest");
const app = require('./routes/user');
const mongoose = require('mongoose');

describe("Test the root path", () => {
    test("It should response the GET method", () => {
        const response = request(app).post("http://localhost:8000/user/add"
        ).send ({
            "Name": "Awais"
        })
        expect(response.statusCode),toBe(200);
    })
})