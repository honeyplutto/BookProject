const Book = require('../model/bookModel')

const getFilteredBooks = async (search, genre, sortQuery, sort, page, limit) => {
    sortQuery ? (sort = sortQuery.split(',')) : (sort = [sort]);
    let sortBy = {};
    if(sort[1]) {
        sortBy[sort[0]] = sort[1];
    } else {
        sortBy[sort[0]] = 'asc';
    }

    return await Book.find({name: { $regex: search, $options: 'i'}})
    .where('genre')
    .in([...genre])
    .sort(sortBy)
    .skip(page * limit)
    .limit(limit);
}

const getTotalBooks = async (search, genre) => {
    return await Book.countDocuments({
        genre: { $in: [...genre] },
        name: { 
            $regex: search, 
            $options: 'i'
        },
    });
}

module.exports = {
    getFilteredBooks,
    getTotalBooks
}