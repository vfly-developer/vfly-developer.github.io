import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function NavigationMenu(props) {
    return (
        <div className="text-white">
            <div className="text-blue-600 font-bold text-2xl p-3 text-center">
                V-Fly Developer
            </div>
                        
            <ul className="">
                <li className="py-3 block">
                    <Link
                        to="/home" 
                        className="px-3"
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li className="py-3 block">
                    <Link
                        to="/about" 
                        className="px-3"
                        onClick={props.closeMenu}
                    >
                        About Me
                    </Link>
                </li>
                <li className="py-3 block">
                    <Link
                        to="/projects" 
                        className="px-3"
                        onClick={props.closeMenu}
                    >
                        My Projects
                    </Link>
                </li>
                <li className="py-3 block">
                    <Link
                        to="/blog" 
                        className="px-3"
                        onClick={props.closeMenu}
                    >
                        My Blog
                    </Link>
                </li>
                <li className="py-3 block">
                    <Link
                        to="/contact" 
                        className="px-3"
                        onClick={props.closeMenu}
                    >
                        Contact Me
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu