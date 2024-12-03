import React from 'react'
import "../Navbar/navbar.css"
import { asset } from '../../assets/asset'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={asset.bio_logo1} className='bio-logo' alt="" height="80" width="80" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/About">About Us</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/Service-1">Service-1</a></li>
                                    <li><a className="dropdown-item" href="/Service-2">Service-2</a></li>
                                    <li><a className="dropdown-item" href="/Service-3">Service-3</a></li>
                                    <li><a className="dropdown-item" href="/Service-4">Service-4</a></li>
                                    <li><a className="dropdown-item" href="/Service-5">Service-5</a></li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
