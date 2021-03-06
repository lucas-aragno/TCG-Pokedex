import path from 'path'
import { Server } from 'http'
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Pokedex from './components/Pokedex'

const app = new Express()
const server = new Server(app)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(Express.static(path.join(__dirname, 'static')))

app.get('*', (req, res) => {
  let markup = renderToString(<Pokedex />)
  return res.render('index', { markup })
})

server.listen(3000, err => {
  if (err) {
    return console.error(err)
  }
  console.info('Server running on http://localhost:3000')
})
