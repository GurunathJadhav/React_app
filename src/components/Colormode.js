import React from 'react'

export default function Colormode() {
  return (
    <>
    <div className="dropdown" data-bs-theme="light">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
    Default dropdown
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a className="dropdown-item active" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="/">Separated link</a></li>
  </ul>
</div>

<div className="dropdown" data-bs-theme="dark">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="false">
    Dark dropdown
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
    <li><a className="dropdown-item active" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="/">Separated link</a></li>
  </ul>
</div>

</>
  )
}
