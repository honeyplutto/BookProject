import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../store/book/bookSlice';
import { Container, Stack } from '@mui/material'
import '@emotion/styled'
import Cards from '../Cards/Cards';
import Select from '../Select/Select';
import Pagination from '../Pagination/Pagination'

function Book() {
  const dispatch = useDispatch();

  const { page, limit, sort, search, books } = useSelector(state => state.book);

  useEffect(() => {
    dispatch(getBooks(page, limit, sort, search));
  }, [page, sort]);

  return (
    <Container sx={{marginTop: 5}} maxWidth='md'>
      <Select />
      <Cards books={books}/>
      <Stack spacing={2}>
        <Pagination />
      </Stack>  
    </Container>
  )
}

export default Book