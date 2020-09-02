import { gql } from '@apollo/client'
const getAuthorsQuery = gql`
  query {
    authors {
      name
      id
    }
  }
`

const getBooksQuery = gql`
  query {
    books {
      title
      genre
      id
    }
  }
`

const addBookMutation = gql`
  mutation($title: String!, $genre: String!, $authorId: ID!) {
    addBook(title: $title, genre: $genre, authorId: $authorId) {
      title
      genre
      id
    }
  }
`

export { addBookMutation, getBooksQuery, getAuthorsQuery }
