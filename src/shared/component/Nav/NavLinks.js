import React from 'react'
import './NavLinks.css'
import {NavLink} from 'react-router-dom'

const NavLinks = props => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to="/" exact>全部使用者</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">我的</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">新增</NavLink>
      </li>
      <li>
        <NavLink to="/auth">登入</NavLink>
      </li>
    </ul>
  )
}

export default NavLinks
