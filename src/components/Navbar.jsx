import React from 'react'

const Navbar = () => {
  return (
    <div  className='navbar'>
      <span className="logo">Ichat</span>
      <div className='user'>
        <img src='https://bootdey.com/img/Content/avatar/avatar1.png' alt=''/>
        <span>Ro</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar;