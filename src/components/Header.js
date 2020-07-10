import React from 'react'
import Navigation from './Navigation'
import '../css/header.css'

function Header() {
    return(
        <header className="p-3 flex justify-between items-center">
            <span className="text-3xl font-bold px-2 text-blue-500"><a href="/home">VFly-Developer</a></span>

            <div className="font-bold text-blue-500">
                <Navigation />
            </div>
        </header>
    )
}

export default Header