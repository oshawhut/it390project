import React from 'react'
import './navbar.css'


const Navbar= () => {
    return (
        <header className='header'>
            <a href = "/" className = "logo">DokiDoki</a>

            <nav className = "navbar">
                <a href = "/">About</a>
                <a href = "/">Resources</a>
                <a href = "./signin">Sign in</a>
                <a href = "/">Sign up</a>
            </nav>

        </header>    
    )

}

export default Navbar