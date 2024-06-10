import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-light border-top py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <Link to="/" className="d-flex align-items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                alt="Logo"
                                style={{ height: '50px' }}
                            />
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-4">
                                <h5>Resources</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <NavLink to="/" className={
                                            ({ isActive }) => `nav-link ${isActive ? 'text-warning' : 'text-secondary'} px-2 text-secondary`
                                        }>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" className={
                                            ({ isActive }) => `nav-link ${isActive ? 'text-warning' : 'text-secondary'} px-2 text-secondary`
                                        }>
                                            About
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h5>Follow us</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            href="https://github.com/dcoder01"
                                            className="text-muted text-decoration-none"
                                            target="_blank"
                                            rel="noopener noreferrer"

                                        >
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <NavLink to="/discord" className="text-muted text-decoration-none">
                                            Discord
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h5>Legal</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <NavLink to="/privacy-policy" className="text-muted text-decoration-none">
                                            Privacy Policy
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/terms-conditions" className="text-muted text-decoration-none">
                                            Terms & Conditions
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <span className="text-muted">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="text-decoration-none text-dark">
                            hiteshchoudhary
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div>
                        <a href="#" className="text-muted me-3">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="text-muted me-3">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="#" className="text-muted me-3">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="#" className="text-muted">
                            <i className="bi bi-dribbble"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
