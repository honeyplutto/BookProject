const { genreOptions } = require('../utils/genreOptions');
const { getFilteredBooks, getTotalBooks } = require('../services/bookService');

const getBooks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || '';
        let sort = req.query.sort || 'ratings';
        let genre = req.query.genre || 'All';

        genre === 'All' ? (genre = [...genreOptions]) : (genre = req.query.split(','));

        const books = await getFilteredBooks(search, genre, req.query.sort, sort, page, limit);
        const total = await getTotalBooks(search, genre);

        const response = {
            error: false,
            total,
            page: page + 1,
            limit,
            genre: genreOptions,
            books 
        };

        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: true,
            message: 'Internal Server Error', error
        })
    }
};

module.exports = {
    getBooks,
}