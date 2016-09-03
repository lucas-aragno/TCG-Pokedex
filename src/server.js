import path from 'path'
import { Server } from 'http'
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import webpack from 'webpack'

import config from '../webpack.config'
import Pokedex from './components/Pokedex'

delete process.env.BROWSER

const compiler = webpack(config)

const app = new Express()
const server = new Server(app)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Use this when its production and you are
// actually using static stuff
// app.use(Express.static(path.join(__dirname, 'static')))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

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
