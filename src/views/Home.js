import React from 'react'
import profileImg from "../images/avatar.png"
import cloud from "../images/new-cloud.png"
import "../css/home.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Home() {
    return (
        <div className="h-screen bottom-0 bg-blue-500 flex-container">
            <div className="welcoming text-white text-center">
                <img className="main-img object-center pt-8" src={profileImg}></img>
                <h1 className="p-4 font-bold text-3xl pt-6 font-serif">Always Learning & Seeking to Improve</h1>
                <h2 className="text-lg italic font-mono">Welcome to my self-designed and self-coded portfolio!</h2>
            </div>
            
            <div className="body">
                <div className="flex text-white">
                    <img className="pt-8 pr-4 unflipped object-left" src={cloud}></img>
                    <div className="p-8 mr-auto ml-0 flex-col text-center mt-auto mb-auto border-4 border-white border-double">
                        <h3 className="pb-4">Want to check out my projects?</h3>
                        <Link
                        to="/projects" 
                        className=""
                        >
                            <button className="bg-blue-700 hover:bg-blue-800 font-bold py-3 px-5 rounded-full">
                                Projects
                            </button>
                        </Link>
                        
                    </div>
                </div>
                <div className="flex text-white pt-8">
                    <div className="p-8 mr-0 ml-auto flex-col text-center mt-auto mb-auto border-4 border-white border-double">
                        <h3 className="pb-4">Learn more about me on my blog!</h3>
                        <Link
                            to="/blog"
                            className=""
                        >
                            <button className="bg-blue-700 hover:bg-blue-800 font-bold py-3 px-5 rounded-full">
                                Blog
                            </button>
                        </Link> 
                    </div>
                    <img className="flipped" src={cloud}></img>
                </div>
            </div>

        </div>
    )
}

export default Home