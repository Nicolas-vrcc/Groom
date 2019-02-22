import React, { useState } from 'react'
import '../styles/MessageInput.css'

async function sendMessage(room, content, setLoading, setError) {
  try {
    await fetch(`${process.env.REACT_APP_API_URL}/message`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ room, content })
    })
  } catch(error) {
    setError('Could not send message')
  }
  setLoading(false)
}

const MessageInput = ({ room }) => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.length > 0) {
      sendMessage(room, message, setLoading, setError)
    }
  }

  return (
    <>
      {error ? <p>{error}</p> : null}
      <form className="MessageInput" onSubmit={handleSubmit}>
        <input
          type="text"
          className="MessageInput__input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
        />
        <input
          type="submit"
          className="MessageInput__button"
          disabled={loading}
          value={loading ? 'Sending...' : 'Send message'}
        />
      </form>
    </>
  )
}

export default MessageInput