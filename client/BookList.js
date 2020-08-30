import React from 'react'

import { gql, useQuery } from '@apollo/client'

const getBooksQuery = gql`
  query {
    books {
      title
      genre
      id
    }
  }
`

const BookList = () => {
  const { data, loading, error } = useQuery(getBooksQuery)
  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Whoops, something is wrong!!!!!!</h1>
  return (
    <ul>
      {data.books.map(book => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  )
}

export default BookList
