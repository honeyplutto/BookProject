const express = require('express');
const router = express.Router();
const Book = require('../model/bookModel');
const { getBooks } = require('../controllers/bookController');

router.get('/book', getBooks);

module.exports = router;