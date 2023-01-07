const express = require('express')
const mongoose = require('mongoose')
const app = express()

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/game-of-thrones'
const SERVER_PORT = process.env.SERVER_PORT || 3000

mongoose.set('strictQuery', true)
mongoose
  .connect(DATABASE_URL)
  .then(console.log('Connected to DB'))
  .catch((err) => console.log('Error in connection to DB =>', err.message))

app.use(express.json())

const charactersRouter = require('./src/routes/characters')
app.use('/characters', charactersRouter)

app.listen(SERVER_PORT, () => {
  console.log(`Server running at port ${SERVER_PORT}`)
})
