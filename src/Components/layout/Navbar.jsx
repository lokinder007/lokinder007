import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <section className="navbar-bg">
                <nav className="navbar navbar-expand-lg navbar-light  ">
                    <div className="container">
                        <Link className="navbar-brand " to="/">
                            ToDO-007
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}>

                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className={`collapse navbar-collapse ${show ? "show" : ""}`} >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        activeClassName="menu_active"
                                        className="nav-link "
                                        aria-current="page"
                                        exact to="/"
                                        activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        activeClassName="menu_active"
                                        className="nav-link"
                                        exact to="/services"
                                        activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                                        Services
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        activeClassName="menu_active"
                                        className="nav-link"
                                        exact to="/about"
                                        activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        activeClassName="menu_active"
                                        className="nav-link"
                                        exact to="/contact"
                                        activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                                        Contact
                                    </NavLink>
                                </li>


                            </ul>
                            <form className="d-flex">

                                <button className="btn  btn-style btn-style-border " type="submit">
                                    Sign Up
                                </button>
                                <button className="btn  btn-style btn-style-border " type="submit">
                                    Log In
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar
