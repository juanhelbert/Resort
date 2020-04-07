import React, { useContext, useState, useEffect } from 'react'
import { RoomCard } from '../components/RoomCard/RoomCard'
import { GlobalContext } from '../context/GlobalContext'

export const Rooms = () => {
  const { data } = useContext(GlobalContext)
  const rooms = data && data.rooms && data.rooms.items.map(i => i.fields)
  const prices = (rooms && rooms.map(r => r.price)) || []
  const roomTypes = rooms && [...new Set(rooms.map(i => i.type))]
  const minPrice = Math.min(...prices)
  let maxPrice = Math.max(...prices)

  const [value, setValue] = useState()
  const [search, setSearch] = useState('')
  const [pets, setPets] = useState(false)
  const [type, setType] = useState('all')

  const filteredRooms = rooms && rooms.filter(room =>
    room.price <= value
    && room.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
    && (pets === false ? room : room.pets === true)
    && (type === 'all' ? room : room.type === type)
  )

  useEffect(() => {
    setValue(maxPrice)
  }, [data])

  return (
    data && data.rooms && data.rooms.items ? (
      <>
        <section className='filters'>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value='all'>all</option>
            {roomTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
          <input value={search} onChange={e => setSearch(e.target.value)} />
          <div className='range'>
            {minPrice}
            <input
              onChange={(e) => setValue(e.target.value)}
              type="range"
              min={minPrice}
              max={maxPrice}
              value={value}
              step="1"
            />
            {maxPrice} <h1>{value}</h1>
          </div>
          <div className='checks'>
            <input type='checkbox' checked={pets} onChange={() => setPets(!pets)} id='pets' /><label htmlFor='pets'>Pets</label>
          </div>
        </section>

        <section className='filtered-rooms'>
          {filteredRooms && filteredRooms.length
            ? filteredRooms && filteredRooms.map(item => (
              <RoomCard key={item.slug} {...item} />
            ))
            : <h2>Ningun elemento coincide con la busqueda :(</h2>}
        </section>

      </>
    ) : <h1>L O A D I N G . . . </h1>
  )
}
