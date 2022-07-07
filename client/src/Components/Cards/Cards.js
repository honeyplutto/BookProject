import React from 'react'
import Card from '../Card/Card'

function Cards(books) {
    return (
        <>
        {books.books.map(book => (
            <Card key={book._id} book={book} />
        ))}
        </>
    )
}

export default Cards