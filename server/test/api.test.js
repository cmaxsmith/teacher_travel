const request = require('supertest');

const app = require('../src/app');

describe('POST /api/v1/messages', () => {
  it('responds with inserted message', function (done) {
    const requestObj = {
      city: 'Budapest',
      country: 'Hungary'
    }
    const responseObj = {
      ...requestObj,
      _id: '5d5a84f3aeb724991150de86',
      date: '2019-08-19T11:16:15.124Z'
    }
    request(app)
      .post('/api/v1/messages')
      .send(requestObj)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        res.body._id = '5d5a84f3aeb724991150de86',
          res.body.date = '2019-08-19T11:16:15.124Z'
      })
      .expect(200, responseObj, done)
  });
});
