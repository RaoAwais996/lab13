const request = require("supertest");
const app = require('./routes/user');
const mongoose = require('mongoose');

describe("Test the root path", () => {
    test("It should response the GET method", () => {
        const response = request(app).post("http://localhost:8000/user/delete"
        ).send ({
            "Name": "Awais",
            "Email":"raoawais996@gmail.com",
            "Age":20,
            "Contact":8664258
        })
        expect(response.statusCode),toBe(200);
    })
})