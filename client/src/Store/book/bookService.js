import axios from '../../api';

const getBooks = async (page, limit, sort, search) => {
   return await axios.get(`/books/book?page=${page}&limit=${limit}&sort=${sort}&search=${search}`)
}

const bookService = {
    getBooks
}

export default bookService;