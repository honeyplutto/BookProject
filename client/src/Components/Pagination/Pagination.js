import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { setPage } from '../../store/book/bookSlice';
import { Pagination as MUIPagination, PaginationItem } from '@mui/material'
import '@emotion/styled'

function Pagination() {

    const dispatch = useDispatch();
    const { page, pageQtn } = useSelector(state => state.book);

    const handlePageChange = (page) => {
        dispatch(setPage(page))
    }

    return (
        <div>
            {!!pageQtn && (
            <MUIPagination 
                count={pageQtn}
                page={page}
                onChange={(_, num) => handlePageChange(num)}
                sx={{marginY: 3, marginX: 'auto'}}
                renderItem={
                (item) => (
                    <PaginationItem
                    component={Link}
                    to={`/book/?page=${item.page}`}
                    {...item}
                    />
                )
                }
            />
            )}
        </div>
    )
}

export default Pagination