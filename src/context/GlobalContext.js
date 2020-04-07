import React, { useState, useEffect, createContext } from 'react'
import client from '../Contentful'

// Create context
export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState()
  const rooms = { data, setData }

  const getData = async () => {
    try {
      const roomsData = await client.getEntries({
        content_type: 'resort'
      })
      const generalData = await client.getEntries({
        content_type: 'resortGeneralData'
      })
      return setData({
        general: generalData,
        rooms: roomsData
      })
    } catch (err) {
      return console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return <GlobalContext.Provider value={rooms}>
    {children}
  </GlobalContext.Provider>
}
