import React from 'react'
import { FaVideo, FaUserPlus, FaEllipsisH } from 'react-icons/fa';
import Messages from './Messages';
import Input from './Input';

function Chat() {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span></span>
        <div className="chaticon">
          <FaVideo />
          <FaUserPlus />
          <FaEllipsisH />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
