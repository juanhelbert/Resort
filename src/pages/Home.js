import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'
import { Hero } from '../components/Hero/Hero.js'
import { RoomCard } from '../components/RoomCard/RoomCard.js'


export const Home = () => {
  const { data } = useContext(GlobalContext)
  const rooms = data && data.rooms.items.map(i => i.fields)
  const featuredRooms = rooms && rooms.filter(i => i.featured === true)


  return (
    <div className='home-page'>
      <Hero />
      <div className='container flex wrap w-100'>
        <h1 className='w-100 flex'>React Resort</h1>
        <p className='w-100 flex'>
          In the process of internal desktop applications development, many different design specs and
          implementations would be involved, which might cause designers and developers difficulties and
          duplication and reduce the efficiency of development.
        </p>
        <h2 className='w-100 flex'>Featured rooms</h2>
        <div className='featured'>
          {featuredRooms && featuredRooms.map(item =>
            <RoomCard key={item.slug} {...item} />
          )}
        </div>
      </div>
    </div>
  )
}
