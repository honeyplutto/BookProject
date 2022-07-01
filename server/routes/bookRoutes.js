const express = require('express');
const router = express.Router();
const Book = require('../model/bookModel');
const { getBook } = require('../controllers/bookController');

router.get('/book', getBook);

module.exports = router;