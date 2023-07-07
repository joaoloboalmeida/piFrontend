import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">IChat</span>
      <div className="user">
        <Link to="/Profile"><img src={currentUser.photoURL} alt="" /></Link>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Sair</button>
        
      </div>
    </div>
  )
}

export default Navbar