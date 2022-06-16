const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please add a name']
    },
    email: {
        type: String,
        require: [true, 'Please add a email'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'Please add a password']
    },
    password2: {
        type: String,
        require: [true, 'Please add a confirm password']
    },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userScheme);