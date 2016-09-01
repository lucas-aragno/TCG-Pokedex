import React from 'react'

const CardItem = ({
  name,
  types,
  imageUrl
}) => (
  <div className='card-item'>
    <img src={imageUrl} className='card-image' />
    <h1 className='card-name'> { name } </h1>
    <ul className='card-types'>
    {
      types.map((type) => (<li> <h3> {type} </h3> </li>))
    }
    </ul>
  </div>
)

export default CardItem
