import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="masthead mb-auto mt-5">
      <div className="inner">
        <h3 className="masthead-brand pr-5">OhAnime</h3>
        <nav className="nav nav-masthead justify-content-center px-5">
          <li className="nav-item">
          <Link className="nav-link active " to="/">Home</Link>
          </li>
        </nav>
      </div>
    </header>
  )
}

export default Header