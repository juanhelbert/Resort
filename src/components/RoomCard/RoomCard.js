import React from 'react'
import { Link } from 'react-router-dom'
import './RoomCard.scss'

const icons = {
  capacity: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" style={{ height: '21px', width: '21px' }} xmlns="http://www.w3.org/2000/svg"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>,
  pets: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></svg>,
  breakfast: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" style={{ marginBottom: '-2px' }} xmlns="http://www.w3.org/2000/svg"><path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path></svg>
}

export const RoomCard = props => {
  const { images, name, slug, capacity, pets, breakfast } = props
  const bg_img = images[0].fields.file.url

  return (
    <Link to={`/rooms/${slug}`} >
      <article className='room-card' style={{ backgroundImage: `url(${bg_img})` }}>
        <span className='overlay' />
        <div className='content'>
          <b className='name'>{name}</b>
          <div className='services'>
            <span className='capacity'>{icons.capacity} {capacity}</span>
            {pets && <span className='pets'>{icons.pets}</span>}
            {breakfast && <span className='breakfast'>{icons.breakfast}</span>}
          </div>
        </div>
      </article>
    </Link>
  )
}

