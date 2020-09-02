import React from 'react'

import BookList from './BookList'
import AddBook from './AddBook'

const App = () => {
  return (
    <div>
      <h1>Reading List</h1>
      <BookList />
      <AddBook />
    </div>
  )
}

export default App
