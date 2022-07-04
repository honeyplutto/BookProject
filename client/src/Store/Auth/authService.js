import axios from '../../api';

const handleRegister = async (userData) => {

    const response = await axios.post('/users/registration', userData);

    console.log(response)
    if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data
}

const handleLogin = async (userData) => {
    const response = await axios.post('/users/login', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data
}

const handleLogout = () => {
    localStorage.removeItem('user')
}

const authServic = {
    handleRegister,
    handleLogin,
    handleLogout
}

export default authServic
