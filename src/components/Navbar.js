import React from 'react'
import { Link } from 'react-router-dom'
import navStyle from '../assets/styles/navbar.module.css'

export default function Navbar({render}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top shadow-sm">
        <div className="container">
            <Link to={`/home`} className={`navbar-brand text-danger fw-lighter font-monospace fs-3 order-lg-0 ${navStyle.logo}`}>Brosasia Products</Link>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="row collapse navbar-collapse order-lg-1" id="navMenu">
                <div className="col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                    <input className="form-control form-control-lg me-2 border border-4 font-monospace" type="search" placeholder="Search by product name" aria-label="Search" onChange={(e) => render(e.target.value)} />
                </div>
            </div>
        </div>
    </nav>
  )
}
