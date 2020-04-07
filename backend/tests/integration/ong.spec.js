const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  });

  it("Should be able to create a new ONG", async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "Ong66",
        email: "ong@hotmail.com",
        whatsapp: "45998086166",
        city: "Cascavel",
        uf: "PR" 
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});