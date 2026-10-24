import React from 'react'

const Navbar = () => {
  return (
     <nav id="nav">
        <div className="logo">
            <h1>Medium</h1>
        </div>
        <div className="link">
            <a href="#">Our Story</a>
            <a href="#">Membership</a>
            <a href="#">Write</a>
            <a href="#">Sign in</a>
            <a id="spclLink" href="#">Get started</a>
        </div>
    </nav>
  )
}

export default Navbar