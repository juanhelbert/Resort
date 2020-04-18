import React, { useContext, useState, useEffect } from 'react'
import { RoomCard } from '../components/RoomCard/RoomCard'
import { GlobalContext } from '../context/GlobalContext'
import './Pages.scss'

import { Select, Input, Slider, Switch } from 'antd';

export const Rooms = () => {
  const { Option } = Select;
  const { data } = useContext(GlobalContext)
  const rooms = data && data.rooms && data.rooms.items.map(i => i.fields)
  const prices = (rooms && rooms.map(r => r.price)) || []
  const roomTypes = rooms && [...new Set(rooms.map(i => i.type))]
  const minPrice = Math.min(...prices)
  let maxPrice = Math.max(...prices)

  const [value, setValue] = useState()
  const [search, setSearch] = useState('')
  const [pets, setPets] = useState(false)
  const [breakfast, setBreakfast] = useState(false)
  const [type, setType] = useState('all')

  const filteredRooms = rooms && rooms.filter(room =>
    room.price <= value
    && room.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
    && (pets === false ? room : room.pets === true)
    && (breakfast === false ? room : room.breakfast === true)
    && (type === 'all' ? room : room.type === type)
  )

  useEffect(() => {
    setValue(maxPrice)
  }, [data])


  return (
    <div className='container wrap rooms-page'>
      {data && data.rooms && data.rooms.items ? (
        <>
          <section className='filters w-100 flex wrap center'>
            <Select
              className='wrapper'
              value={type}
              onChange={e => setType(e)}
              defaultValue="all" style={{ width: 120 }}
            >
              <Option value="all">all</Option>
              {roomTypes.map(type => <Option key={type} value={type}>{type}</Option>)}
            </Select>
            <Input
              className='wrapper'
              placeholder="Single economy"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: 200 }}
            />
            <div className='wrapper slider'>
              <span className='min'>${minPrice}</span>
              <Slider
                min={minPrice}
                max={maxPrice}
                style={{ width: 200 }}
                defaultValue={maxPrice}
                onChange={(e) => setValue(e)}
              />
              <span className='max'>${maxPrice}</span>
            </div>
            <div className='wrapper switch'>
              <Switch
                onChange={() => setPets(!pets)}
                size='small' id='pets'
              />
              <label htmlFor='pets'>Pets</label>
            </div>
            <div className='wrapper switch'>
              <Switch
                onChange={() => setBreakfast(!breakfast)}
                size='small' id='breakfast'
              />
              <label htmlFor='breakfast'>Breakfast</label>
            </div>
          </section>

          <section className='filtered-rooms w-100'>
            {filteredRooms && filteredRooms.length
              ? filteredRooms && filteredRooms.map(item => (
                <RoomCard key={item.slug} {...item} />
              ))
              : <h2>Ningun elemento coincide con la busqueda :(</h2>}
          </section>

        </>
      ) : <h1>L O A D I N G . . . </h1>
      }
    </div>
  )
}
