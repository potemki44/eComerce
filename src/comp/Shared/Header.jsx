import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const checkBox = useRef()

  const toggleNav = () => {
    checkBox.current.checked = false
  }

  return (
    <header className="header" >
      <NavLink to="/">
        <h1 className="header__logo">eCommerce</h1>
      </NavLink>

      <input ref={checkBox} type="checkbox" className="Checkboxi" id="Checkbox" />
      <label htmlFor="Checkbox">
        <span className="menu_icon">

          <i class="fa-sharp fa-solid fa-bars" /> </span></label>
      <div></div>


      <nav className="header__nav" >
        <ul className="header__list">
          <li onClick={toggleNav} className="header__item">
            <NavLink className={({ isActive }) => isActive ? "active-link" : ''} to="/login">
              Login
            </NavLink>
          </li>
          <li onClick={toggleNav} className="header__item">
            <NavLink className={({ isActive }) => isActive ? "active-link" : ''} to="/purchases">
              Purchases
            </NavLink>
          </li>
          <li className="header__item" onClick={toggleNav}>
            <NavLink className={({ isActive }) => isActive ? "active-link" : ''} to="/cart" >Cart</NavLink>
          </li>
        </ul>

      </nav>
    </header>


  )
}

export default Header