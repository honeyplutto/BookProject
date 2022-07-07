import React from 'react'

function Card({book}) {
  return (
    <div>
      <h1>Author - {book.author}</h1>
      <h3>Title - {book.title}</h3>
      <p>Year - {book.year}</p>
      <p>Pages - {book.pages}</p>
    </div>
  )
}

export default Card