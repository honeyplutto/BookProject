const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    year: {
        type: Number, 
        required: true
    },
    img: {
        type: String, 
        required: true
    },
    genre: {
        type: [String], 
        required: true
    },
    author: {
        type: String,
        requred: true
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Book', bookSchema);
