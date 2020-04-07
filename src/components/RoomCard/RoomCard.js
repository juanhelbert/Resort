import React from 'react'
import { Link } from 'react-router-dom'
import './RoomCard.scss'

export const RoomCard = props => {
  const { name, slug, price, capacity, images } = props
  const bg_img = images[0].fields.file.url

  return (
    <Link to={`/rooms/${slug}`}>
      <article className='room-card' style={{ backgroundImage: `url(${bg_img})` }}>
        {name}{slug}{price}
      </article>
    </Link>
  )
}

