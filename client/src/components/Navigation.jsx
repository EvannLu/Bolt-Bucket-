import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import '../css/Navigation.css'

const Navigation = () => {
    return (
        <header className="site-header">
            <div className="container nav-inner">
                <div className="brand">
                    <Link to="/" className="brand-link">
                        <h1>Bolt Bucket</h1>
                        <span className="bolt-emoji" role="img" aria-label="bolt">⚡</span>
                    </Link>
                </div>

                <nav className="main-nav" aria-label="Main Navigation">
                    <ul>
                        <li><Link to="/" className="nav-link">Customize</Link></li>
                        <li><Link to="/cars" className="nav-link">View Cars</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navigation