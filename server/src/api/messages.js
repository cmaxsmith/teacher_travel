const express = require('express');
const Joi = require('joi');
const db = require('../db');
const messages = db.get('messages')

const schema = Joi.object().keys({
  city: Joi.string().required(),
  country: Joi.string().required(),
  // regex(/^[A-zÀ-ÿ ]{1, 100}$/)
  // latitude: Joi.number().min(-90).max(90).required(),
  // longitude: Joi.number().min(-180).max(180).required(),
  // date: Joi.date(),

});

const router = express.Router();

router.get('/', (req, res) => {
  res.json([]);
});

router.post('/', (req, res) => {
  const result = Joi.validate(req.body, schema);
  if (result.error === null) {
    const { city, country } = req.body
    const userData = {
      city,
      country,
      // latitude: req.body.latitude,
      // longitude: req.body.longitude
      date: new Date()
    }
    messages
      .insert(userData)
      .then(insertedData => {
        res.json(insertedData)
      })
  } else {
    next(result.error);
  }
});

module.exports = router;
