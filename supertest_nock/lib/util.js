const request = require('request-promise-native');

const accessTest = async (url) => {
  const options = {
    url: url,
    method: 'GET',
  };

  let statusCode = undefined;

  console.log('>>> accessTest options=', options);

  await request(options).then(body => {
    console.log('>>> request then');
    statusCode = 200;
  }).catch(err => {
    console.log('>>> request catch');
    console.log(err);
    if (err.statusCode) {
      statusCode = err.statusCode;
    }
  });

  return statusCode;
};

module.exports = {
  accessTest,
};