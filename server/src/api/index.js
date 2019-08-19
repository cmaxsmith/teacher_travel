const express = require('express');

const cityData = require('./cityData');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

// router.use('/messages', messages);
router.use('/citydata', cityData);

module.exports = router;
