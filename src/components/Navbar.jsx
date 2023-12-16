import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">ToDoApp</Link>
            <button className="navbar-toggler" type="button" databstoggle="collapse" databstarget="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/task">Tasks</Link>
                </li>
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
