import React from 'react'

export const Hero = (props) => {
  return (
    <header {...props}>
      hero
      {props.children}
    </header>
  )
}
