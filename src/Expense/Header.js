import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './Assets/logo.png'

const Header = () => {
  return (
  <div className="header container-fluid p-0">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
    <NavLink className="navbar-brand" to="/">
    <img src={logo} alt='logo' width="70" height="60" className='rounded-circle'/>
    <strong> Expense <span className='text-danger'>Tracker</span></strong>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar">
      <div className="navbar-nav ms-auto">
        <NavLink className="nav-link active" to="/">
        HOME
        </NavLink>
        <NavLink className="nav-link" to="/aboutus">ABOUT US</NavLink>
        <NavLink className="nav-link" to="/adminlogin">
            <button className='text-bg-primary border-0 p-1 rounded'>LOGIN</button>
        </NavLink>
      </div>
    </div>
    </div>
    </nav>
  </div>
  )
}

export default Header