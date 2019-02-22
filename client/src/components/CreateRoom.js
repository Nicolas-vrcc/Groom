import React, { useState } from 'react'
import '../styles/CreateRoom.css'

async function createRoom(setRooms, setLoading, name, rooms) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/room`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name })
  })
  if (response.ok) {
    const roomsResponse = await response.json()
    setRooms([roomsResponse.data, ...rooms])
  }
  setLoading(false)
}

const CreateRoom = ({ rooms, setRooms }) => {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    createRoom(setRooms, setLoading, name, rooms)
  }
  return (
    <>
      <form className="CreateRoom" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Room name"
        />
        <input
          disabled={loading}
          type="submit"
          value={loading ? 'Creating room...' : 'Create room'}
        />
      </form>
    </>
  )
}

export default CreateRoom