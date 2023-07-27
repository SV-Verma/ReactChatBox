import React from 'react'

const Search = () => {
  return (
    <div className='search'>
     <div className="searchform">
      <input type="text" placeholder='Find a User' className='s-input'/>
     </div>
     <div className="userchat">
      <img src="https://res.cloudinary.com/dn6uh1lxj/image/upload/v1690134972/assist/Shivji_hrloje.jpg" 
      alt="" 
      className='s-img'/>
      <div className="userchatinfo">
        <span>Radhey</span>
      </div>
     </div>
    </div>
  )
}

export default Search
