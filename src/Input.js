import React from 'react'
import { FaImage, FaPaperclip } from 'react-icons/fa';
function Input ()  {
  return (
    <div className='I-input'>
      <input type="text" placeholder='Type something....' />
      <div className="i-send">
         <FaImage />
         <input type="file" style={{display:"none"}} id='file' />
         <label htmlFor="file">
            <FaPaperclip />
         </label>
         <button>Send</button>
      </div>
    </div>
  )
}

export default Input
