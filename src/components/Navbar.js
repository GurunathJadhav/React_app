import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg mx-3 my-2 navbar- ${props.mode} bg-${props.mode}`} style={{
      boxShadow: `2px 0px 15px 2px ${props.mode === 'light' ? 'green' : 'red'}`, border: `1px solid ${props.mode === 'light' ? 'green' : 'red'}`, borderRadius: `10px`

    }
    }>
      
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/">{props.title}</a>
        <button className="navbar-toggler"  style={{backgroundColor:`${props.mode === 'light' ? 'green' : 'red'}`,borderRadius:`15px`}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse text-${props.mode === 'light' ? 'dark' : 'light'}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={`nav-item `}>
              <Link className={`nav-link active" aria-current="page`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" style={{ color: `${props.mode === 'light' ? 'green' : 'red'}` }} htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === 'light' ? 'dark' : 'light'}`}mode</label>
          </div>

        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}