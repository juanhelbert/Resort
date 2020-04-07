import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Hero } from '../components/Hero/Hero.js'
import { RoomCard } from '../components/RoomCard/RoomCard.js'

export const Home = () => {
  const { data } = useContext(GlobalContext)
  const rooms = data && data.rooms.items.map(i => i.fields)
  const featuredRooms = rooms && rooms.filter(i => i.featured === true)

  return (
    <div>
      <Hero />
      Featured rooms
      {featuredRooms && featuredRooms.map(item =>
        <RoomCard key={item.slug} {...item} />
      )}
    </div>
  )
}
