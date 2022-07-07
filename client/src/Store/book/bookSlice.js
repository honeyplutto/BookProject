import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import bookService from './bookService'

const initialState = {
    books: [],
    page: 1,
    limit: 5,
    sort: '',
    search: '', 
    pageQtn: null,
}

// TODO re-create with createAsyncThunk 
export const getBooks = (page, limit, sort, search) => async (dispatch) => {
    const { data } = await bookService.getBooks(page, limit, sort, search);
    dispatch(setBooks(data.books));
    dispatch(setPageQtn(data.pageQtn))
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        reset: (state) => {
            state.page = state.page
            state.limit = state.limit
            state.sort = state.sort
            state.search = state.search
        },
        setSort: (state, action) => {
           state.sort = action.payload
        },
        setBooks: (state, action) => {
            state.books = action.payload
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setPageQtn: (state, action) => {
            state.pageQtn = action.payload
        }
    }
    // TODO extra reducers
});

export const { reset, setSort, setBooks, setPage, setPageQtn } = bookSlice.actions

export default bookSlice.reducer