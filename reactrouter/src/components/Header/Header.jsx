import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="rounded-3"
                            alt="Logo"
                            style={{ height: '40px' }}
                        />
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink  to="/"  className={
                            ({isActive})=>`nav-link ${isActive? 'text-warning' : 'text-secondary'} px-2 text-secondary`
                        }
                        >
                            Home
                            </NavLink>
                        </li>
                        <li><NavLink to="/about"  className={
                            ({isActive})=>`nav-link ${isActive? 'text-warning' : 'text-secondary'} px-2 text-secondary`
                        }
                        >
                            about
                            </NavLink>
                        </li>
                        
                        <li><NavLink to="/contact"  className={
                            ({isActive})=>`nav-link ${isActive? 'text-warning' : 'text-secondary'} px-2 text-secondary`
                        }
                        >
                            contact
                            </NavLink>
                        </li>
                        <li><NavLink to="/github"  className={
                            ({isActive})=>`nav-link ${isActive? 'text-warning' : 'text-secondary'} px-2 text-secondary`
                        }
                        >
                            github
                            </NavLink>
                        </li>
                        
                    </ul>

                    <div className="text-end">
                        <Link to="/login" className="btn btn-outline-light me-2">
                            Login
                        </Link>
                        <Link to="/signup" className="btn btn-warning">
                            Sign-up
                        </Link>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;
