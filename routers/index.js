const express = require('express');
const router = express.Router();
const {indexControllers} = require('../controllers/indexControllers')


router.get('/', indexControllers )



  module.exports = router