import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChatMessage } from './components/chat-message'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChatMessage />
  </React.StrictMode>,
)
