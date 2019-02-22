import React from 'react'
import '../styles/Message.css'
import { getTimeFromDate } from '../services/time'

const Message = ({ author, content, date }) => {
  if (author == null || content == null) return null
  return (
    <div className="Message">
      <div className="Message__info">
        <span className="Message__user">{author}</span>
        <span className="Message__date">{' - '}{getTimeFromDate(date)}</span>
      </div>
      <div className="Message__bubble">{content}</div>
    </div>
  )
}

export default Message