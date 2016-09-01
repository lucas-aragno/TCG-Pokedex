import React, { Component } from 'react'
import { debounce } from 'lodash'
import kakuna from 'kakuna'

import CardList from './CardList'

class Pokedex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: []
    }
  }

  componentWillMount () {
    this.delayedCallback = debounce((value) => {
      kakuna.get(`https://api.pokemontcg.io/v1/cards?name=${value}`).end().then(
        (res) => (this.setState({
          cards: res.body.cards
        })))
    }, 50)
  }

  onChange (event) {
    this.delayedCallback(event.target.value)
  }

  render () {
    const { cards } = this.state
    return (
      <div>
        <input onChange={this.onChange.bind(this)} type='text' placeholder='Insert pokemon here!'/>
        <CardList cards={cards} />
      </div>
    )
  }
}

export default Pokedex
