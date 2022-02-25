const createBook = require("../controllers/createBook");
const request = require('supertest');


describe('To test the update book route', () => {
    it('should contain title and quantity', () => {
        request(createBook).post('/create/book').expect((res)=> {
            res.body.title=res.body.title
            res.body.quantity=res.body.quantity
        })
    })
})