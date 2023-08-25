import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from './logo-a.png'
import './index.scss'

const Home = () => {
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>

                        <img
                            src={LogoTitle}
                            alt="JavaScript Developer Name, Web Developer Name"
                        />

                    </h1>
                    <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home