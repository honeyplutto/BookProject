import React from 'react'
import { InputLabel, Select as MUISelect, MenuItem } from '@mui/material'
import '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../store/book/bookSlice'
import selectOptions  from '../../utils/selectOptions'

function Select() {

    const dispatch = useDispatch();
    const { sort } = useSelector(state => state.book)

    const handleChange = (e) => {
        dispatch(setSort(e.target.value))
    }

    return (
        <div>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <MUISelect
                value={sort}
                label="Sort"
                onChange={handleChange}
            >
            {!!selectOptions && 
                (selectOptions.map(select => (
                    <MenuItem key={select._id} value={select.value}>
                        {select.label}
                    </MenuItem>
                )))}
            </MUISelect>
        </div>
    )
}

export default Select