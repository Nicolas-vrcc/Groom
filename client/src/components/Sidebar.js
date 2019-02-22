import React, { useContext, useState, useEffect } from 'react'
import '../styles/Sidebar.css'
import { UserContext } from './UserProvider'
import RoomPreview from './RoomPreview'
import Logout from './Logout'
import CreateRoom from './CreateRoom'

async function fetchRooms(setRooms, setLoading, setError) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/room/all`,
      { credentials: 'include' }
    )
    const roomsResponse = await response.json()
    if (response.ok) {
      setRooms(roomsResponse.data)
    } else {
      setError(response.message)
    }
  } catch(error) {
    setError('Could not fetch rooms')
  }
  setLoading(false)
}

const Sidebar = () => {
  const { user } = useContext(UserContext)
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState([true])
  const [error, setError] = useState(null)

  useEffect(() => {
    // Set page title on first render
    document.title = 'Groom - Open chat rooms'
    // Fetch rooms on first render
    fetchRooms(setRooms, setLoading, setError)
  }, [])

  return (
    <div className="Sidebar">
      <div className="sidebar_header">
      <h1>Welcome, {user.username} !</h1>
      <Logout />
      </div>
      <div className="room_list">
      {error ? <p>{error}</p> : null}
      {loading ?
        <p>Loading rooms</p>
        :
        rooms && rooms.length ?
          rooms.map(room => <RoomPreview {...room} key={room.name} />)
          :
          <p>No available rooms</p>
      }
      </div>
      <CreateRoom rooms={rooms} setRooms={setRooms} />
    </div>
  )
}

export default Sidebar