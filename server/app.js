const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://tiger:tiger@clusterstar-8a6z8.mongodb.net/gql?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true }
)
mongoose.connection.once('open', () => console.log('database connected'))

const app = express()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.listen(8000, () => console.log('listening on port 8000 yayyyyyyyy'))
