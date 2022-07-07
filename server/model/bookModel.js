const mongoose = require('mongoose');

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const bookSchema = mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    author: {
        type: String,
        requred: true
    },
    country: {
        type: String,
        require: true
    },
    language: {
        type: String,
        require: true
    },
    pages: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    year: {
        type: Number, 
        required: true
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Book', bookSchema);
