import React, { useState } from 'react'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from './queries'
import { useQuery, useMutation } from '@apollo/client'

const AddBook = () => {
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [authorId, setAuthorId] = useState('')
  const { loading, data, error } = useQuery(getAuthorsQuery)
  const [addBookToDatabase] = useMutation(addBookMutation)

  const handleSubmit = e => {
    e.preventDefault()
    addBookToDatabase({
      variables: {
        title,
        authorId,
        genre
      },
      refetchQueries: [
        {
          query: getBooksQuery
        }
      ]
    })
    console.log(authorId)
  }

  if (loading) return <h2> Loading authors ...</h2>
  if (error) return <h2>something is wrong</h2>
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Book Title</label>
        <input
          type='text'
          id='title'
          onChange={e => {
            setTitle(e.target.value)
          }}
        />
      </div>
      <div>
        <label htmlFor='id'>Genre</label>
        <input
          type='text'
          id='id'
          onChange={e => {
            setGenre(e.target.value)
          }}
        />
      </div>
      <div>
        <label htmlFor='selection'>Select author name</label>
        <select
          id='selection'
          onChange={e => {
            setAuthorId(e.target.value)
          }}
        >
          <option>Select</option>
          {data.authors.map(author => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            )
          })}
        </select>
      </div>
      <button type='submit'>+</button>
    </form>
  )
}

export default AddBook
