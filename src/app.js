import React from 'react'
import ReactDOM from 'react-dom'
import Pokedex from './components/Pokedex'

window.onload = () => {
  ReactDOM.render(<Pokedex />, document.getElementById('root'))
}
