const request = require("supertest");
const app = require("../app");

describe("testing the create user route", () => {
  it("should send back a 200 status code", () => {
    request(app)
      .post("/auth/register")
      .expect((res) => {
        res.body.name = res.body.name.toLowerCase();
        res.body.role = res.body.role.toLowerCase();
        res.body.email = res.body.email.toLowerCase();
      });
  });
});
