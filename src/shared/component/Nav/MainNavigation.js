import React, { useState } from 'react'
import './MainNavigation.css'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElement/Backdrop'
const MainNavigation = (props) => {
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(true)
  }

  const closeHandler = () => {
    setOpen(false)
  }
  return (
    <React.Fragment>
      { open && <Backdrop onClick={closeHandler}/>}
      <SideDrawer show={open} onClick={closeHandler}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks/>
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className='main-navigation__title'>
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks/>
        </nav>
        
      </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation
