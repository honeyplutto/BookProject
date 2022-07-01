const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');
const { createUser, checkUser } = require('../services/userService');
const { registrationSchema } = require('../schema/validationSchema')

const registerUser = asyncHandler( async(req, res) => {

    const result = await registrationSchema.validateAsync(req.body)
    const userExist = await User.findOne({email: result.email});

    if(userExist){
        res.status(400);
        throw new Error('User already exists');
    }

    const user = createUser(result);

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id, user.name)
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }

});

const loginUser = asyncHandler( async(req, res) => {

    const { email, password } = req.body;

    const user = checkUser(email)

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id, user.name)
        });
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
});

const getUser = asyncHandler(async (req, res) => {
    
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
});

const generateToken = (id, name) => {
    return jwt.sign({ id, name }, process.env.JWT_SECRET_KEY, {
        expiresIn: '30d',
    });
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}