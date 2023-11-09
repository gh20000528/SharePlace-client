import React, { useContext } from 'react'
import './NavLinks.css'
import {NavLink} from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'

const NavLinks = props => {
  const auth = useContext(AuthContext)
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to="/" exact>全部使用者</NavLink>
      </li>
      {auth.isLoggedIn &&      
        <li>
          <NavLink to="/u1/places">我的</NavLink>
        </li>
      }
      {auth.isLoggedIn && 
        <li>
          <NavLink to="/places/new">新增</NavLink>
        </li>
      }
      {!auth.isLoggedIn && 
        <li>
          <NavLink to="/auth">登入</NavLink>
        </li>
      }
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}> 登出</button>
        </li>
      )}
    </ul>
  )
}

export default NavLinks
