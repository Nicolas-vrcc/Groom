import React, { useContext, useState, useEffect } from 'react'
import '../styles/Sidebar.css'
import { UserContext } from './UserProvider'
import RoomPreview from './RoomPreview'
import Logout from './Logout'
import CreateRoom from './CreateRoom';

async function fetchRooms(setRooms, setLoading) {
  const response = await fetch('/room/all', { credentials: 'include' })
  if (response.ok) {
    const roomsResponse = await response.json()
    console.log(roomsResponse)
    setRooms(roomsResponse.data)
  }
  setLoading(false)
}

const Sidebar = () => {
  const { user } = useContext(UserContext)
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState([true])

  useEffect(() => {
    // Set page title on first render
    document.title = 'Groom - Open chat rooms'
    // Fetch rooms on first render
    fetchRooms(setRooms, setLoading)
  }, [])

  return (
    <div className="Sidebar">
      <div class="sidebar_header">
      <h1>Welcome, {user.username} !</h1>
      <Logout />
      </div>
      <div className="room_list">
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