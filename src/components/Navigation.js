import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu'
import '../css/navigation.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return(
        <nav>
            {/* Only if display screen is small */}
            <span className="text-xl sm:visible md:invisible lg:invisible xl:invisible z-30">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            { 
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props} 
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >
                        
                    </animated.div>
                )
            }

            { 
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props} 
                        className="fixed bg-blue-300 top-0 left-0 w-2/5 h-full z-50 shadow"
                    >
                        <NavigationMenu 
                            closeMenu = {() => setShowMenu(false)}
                        />
                    </animated.div>
                )
            }

            {/* Larger display screen */}   
            <ul className="text-lg hidden-test sm:invisible md:visible lg:visible xl:visible z-20 absolute right-0 inline justify-between">
                <li className="inline justify-between p-3 lg:p-5">
                    <Link
                        to="/home" 
                        className=""
                    >
                        Home
                    </Link>
                </li>
                <li className="inline justify-between p-3 lg:p-5">
                    <Link
                        to="/about" 
                        className=""
                    >
                        About Me
                    </Link>
                </li>
                <li className="inline justify-between p-3 lg:p-5">
                    <Link
                        to="/projects" 
                        className=""
                    >
                        My Projects
                    </Link>
                </li>
                <li className="inline justify-between p-3 lg:p-5">
                    <Link
                        to="/blog" 
                        className=""
                    >
                        My Blog
                    </Link>
                </li>
                <li className="inline justify-between p-3 lg:p-5">
                    <Link
                        to="/contact" 
                        className=""
                    >
                        Contact Me
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation