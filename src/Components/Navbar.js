import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="logo" style={{  display : "flex", justifyContent : "center" }}>
      <span>The</span>
      <h1 style={{ fontSize : "3rem" }} >Siren</h1>
    </div>
    <nav>
    <ul>
      <div> <strong><NavLink  className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  } to="/">Home</NavLink></strong> </div>
      <div><strong ><NavLink  className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  } to="/bollywood">Bollywood</NavLink></strong></div>
      <div><strong><NavLink  className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  } to="/technology">Technology</NavLink></strong></div>
      <div><strong><NavLink  className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  } to="/hollywood">Hollywood</NavLink></strong></div>
      <div><strong><NavLink  className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  } to="/fitness">Fitness</NavLink></strong></div>
      <div><strong><NavLink  className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  } to="/food">Food</NavLink></strong></div>
      </ul>
    </nav>
    </>
  )
}

export default Navbar