const request = require('supertest');
const nock = require('nock');
const app = require('../app');


describe('users test', () => {
  /*
  it('test #1', (done) => {
    request(app).get('/users').expect(200, done);
  });

  it('test #2', (done) => {
    request(app).get('/users?url=http://localhost:3001').expect(200, done);
  });

  it('test #3', (done) => {
    const url = 'http://localhost:3001';
    nock(url).get('/').reply(200, (data) => {
      console.log('*** nock url:', data);
    });
    request(app).get(`/users?url=${url}`).expect(200, done);
  });
  */

  /*
  it('test #4', (done) => {
    const url = 'http://localhost:3001/?';
    const query = 'sc_e=ytmh';
    //nock(url).get('/?' + query).reply(200, (data) => {
    nock(url)
      .get('/')
      // クエリを正確に記載もできる
      //.query({sc_e: 'ytmh'})
      // これでどんなクエリも通せる
      .query(true)
      .reply(400, (data) => {
        console.log('*** nock url:', data);
      });

    request(app).get(`/users?url=${url}${query}`).expect(400, done);
  });
  */
  it('test #4', (done) => {
    const url = 'http://localhost:3001/test?';
    const query = 'code=400';
    //nock(url).get('/?' + query).reply(200, (data) => {
    nock('http://localhost:3001')
      .get('/test')
      // クエリを正確に記載もできる
      //.query({sc_e: 'ytmh'})
      // これでどんなクエリも通せる
      .query(true)
      .reply(400, (data) => {
        console.log('*** nock url:', data);
        return data;
      });

    request(app).get(`/users?url=${url}${query}`).expect(500, done);
  });
});