import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="logo" style={{  display : "flex", justifyContent : "center" }}>
      <span>The</span>
      <h1 style={{ fontSize : "3rem" }} >Siren</h1>
    </div>
    <nav>
    <ul>
      <div> <strong>Home</strong> </div>
      <div><strong>Bollywood</strong></div>
      <div><strong>Technology</strong></div>
      <div><strong>Hollywood</strong></div>
      <div><strong>Fitness</strong></div>
      <div><strong>Food</strong></div>
      </ul>
    </nav>
    </>
  )
}

export default Navbar