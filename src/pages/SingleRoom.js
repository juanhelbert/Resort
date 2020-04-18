import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const SingleRoom = props => {
  const { data } = useContext(GlobalContext)
  const { slug } = props.match.params
  const rooms = data && data.rooms && data.rooms.items.map(i => i.fields)
  const actualRoom = rooms && rooms.find(room => room.slug === slug)
  const { name, type, price, size, capacity, description, pets, breakfast, extras, images } = actualRoom || ''
  return (
    <div className='container'>
      {actualRoom ? (
        <div>
          {name}{price}{type}{size}{capacity}{description}
        </div>

      ) : 'L O A D I N G . . . '}
    </div>
  )
}
