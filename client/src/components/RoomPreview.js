import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/RoomPreview.css'

const RoomPreview = ({ name, users }) => {
  return (
    <Link className="RoomPreview" to={`/room/${name}`}>
      <p className="RoomPreview__name">{name}</p>
      <p>{users.length} are chatting</p>
    </Link>
  )
}

export default RoomPreview