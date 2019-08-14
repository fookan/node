const util = require('../lib/util');
const nock = require('nock');

describe('test', () => {
  it('test#1', async () => {
    const url = 'https://www.google.co.jp';

    nock(url).get('/').reply(200, (url) => {
      console.log('ok');
    });

    const result = await util.accessTest(url);
    expect(result).toBeTruthy();
  });
});