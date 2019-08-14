const express = require('express');
const router = express.Router();
const util = require('../lib/util');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const url = req.query.url ? req.query.url : 'http://localhost:3001';
  console.log('>>> url=', url);

  const result = await util.accessTest(url);
  console.log('*** result=', result);
  if (result === 200) {
    res.status(200).send('OK');
  } else {
    //res.status(result).send('ERROR');
    res.status(500).send('ERROR');
  }
});

module.exports = router;
