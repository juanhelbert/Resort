import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { Link } from 'react-router-dom'

export const Header = () => {
  const context = useContext(GlobalContext)

  return (
    <nav>
      <Link to='/'> Logo</Link>{' '}
      <Link to='/rooms'>Rooms</Link>
    </nav>
  )
}
