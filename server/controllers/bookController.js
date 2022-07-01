const asyncHandler = require('express-async-handler');
const Book = require('../model/bookModel');
const book = require('../data.json');

const getBook = async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || '';
        let sort = req.query.sort || 'rating';
        let genre = req.query.genre || 'All';

        const genreOptions = [
            'Drama',
            'Action',
            'Noir',
            'Adventure',
            'Horror',
            'Cooking',
            'History',
            'IT',
            'Science Fiction',
            'Humor'
        ];

        genre === 'All' ? (genre = [...genreOptions]) : (genre = req.query.split(','));
        req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort]);

        let sortBy = {};
        if(sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = 'asc';
        }

        const books = await Book.find({name: { $regex: search, $options: 'i'}})
            .where('genre')
            .in([...genre])
            .sort(sortBy)
            .skip(page * limit)
            .limit(limit);

        const total = await Book.countDocuments({
            genre: { $in: [...genre] },
            name: { 
                $regex: search, 
                $options: 'i'
            },
        });

        const response = {
            error: false,
            total,
            page: page +1,
            limit,
            genre: genreOptions,
            books 
        };

        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: true,
            message: 'Internal Server Error'
        })
    }
};

// const insertBooks = async () => {
//     try {
//         const docs = await Book.insertMany(book);
//         return Promise.resolve(docs);            
//     } catch(error) {
//         return Promise.reject(error);
//     }
// }

// insertBooks()
//     .then((docs) => console.log(docs))
//     .catch((error) => console.log(error));

module.exports = {
    getBook,
}