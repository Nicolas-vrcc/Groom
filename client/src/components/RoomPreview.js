import React from 'react'
import '../styles/RoomPreview.css'

const RoomPreview = ({ name, users }) => {
  return (
    <button className="RoomPreview">
      <p className="RoomPreview__name">{name}</p>
      <p>{users.length} are chatting</p>
    </button>
  )
}

export default RoomPreview