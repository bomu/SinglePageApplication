import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import json from './informations.json'

const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/api/informations', (request, response) => {
  response.end(JSON.stringify(json))
})

app.listen(port, err => {
  if (err) throw new Error(err)
  else console.log(`listening on port ${port}`)
})