import React from 'react'

import CardItem from './CardItem'

const CardList = ({
  cards
}) => (
  <ul className='card-list'>
    {
      cards.map((card) => (
        <li>
          <CardItem
            name={card.name}
            imageUrl={card.imageUrl}
            types={card.types}
          />
        </li>
      ))
    }
  </ul>
)

export default CardList
