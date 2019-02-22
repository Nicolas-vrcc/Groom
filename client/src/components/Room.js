import React, { useState, useEffect } from 'react'
import { useSocket } from 'use-socketio'
import Message from './Message'
import MessageInput from './MessageInput'
import '../styles/Room.css'

async function fetchMessages(room, setMessages, setLoading, setError) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/room/messages`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ room })
    })
    if (response.ok) {
      const messagesResponse = await response.json()
      setMessages(messagesResponse.data)
    } else {
      setError(response.message)
    }
  } catch(error) {
    setError('Could not fetch messages')
  }
  setLoading(false)
}

const Room = ({ match }) => {
  const { name } = match.params
  const [loading, setLoading] = useState(true)
  const [messages, setMessages] = useState(true)
  const [error, setError] = useState(null)

  // Set page title on first render
  useEffect(() => {
    document.title = `${name} - Groom`
  }, [])

  useEffect(() => {
    fetchMessages(name, setMessages, setLoading, setError)
    // Cleanup on unmount
    return () => {
      setMessages([])
      setLoading(false)
      setError(null)
    }
  }, [match]) // Only run on mount

  const socket = useSocket('new message', newMessage => {
    console.log('new message from socket', newMessage)
    setMessages([newMessage, ...messages])
  })

  return (
    <div className="Room">
      <h1>{name}</h1>
      <div className="main_container">
        <div className="chat_display">
          <div className="messages_container">
            {error ? <p>{error}</p> : null}
            {loading ?
              <p>Loading messages...</p>
              :
              messages && messages.length > 0 ?
                messages && messages.map((messageData, index) =>
                  <Message {...messageData} key={index} />
                )
                :
                <p>Pas de messages</p>
            }
            <Message />
          </div>
        </div>
        <MessageInput room={name} />
      </div>
    </div>
  )
}

export default Room