import React from 'react'
import '../Styles/header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="navigation">
        <div className="logo">
            <span>Dream</span>Legal
        </div>
        <div className="navItems">
             <Link to={'/'} >  Home</Link>
             <Link to={'/'} >Directory </Link>
             <Link to={'/'} >Knowledge</Link>
             <Link to={'/'} >About Us</Link>
        </div>
        <div className="buttons">
            <button>Login</button>
            <button > <Link to={'/products'} >Add Product</Link>   </button>
        </div>
    </div>
  )
}

export default Header