import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/'> Home</Link>
        <Link to='/rooms'>Rooms</Link>
      </nav>
    </header>
  )
}
