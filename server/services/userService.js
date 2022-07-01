const bcrypt = require('bcryptjs');
const User = require('../model/userModel');

const createUser = async (name, email, password, confirmPassword) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return await User.create({
        name,
        email,
        password: hashedPassword,
        confirmPassword
    });
}

const checkUser = async (email) => {
    return await User.findOne({email});
}

module.exports = {
    createUser,
    checkUser
}