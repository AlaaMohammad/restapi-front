import React from 'react'
import Header from '../Layout/Header'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='cover-container d-flex h-100 mx-auto flex-column'>
            <Header></Header>
            <main role="main" className="inner cover">
                <video src="./assets/anime.mp4" muted loop autoPlay></video>
                <div className="overlay"></div>
                <div className='main-text'>
                    <h1 className="cover-heading">It is time for Anime</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius debitis earum dolor, quidem illum, eaque in provident inventore porro facilis vitae odit repudiandae magnam harum nemo culpa ducimus aliquam!</p>
                    <p className="lead">
                        <Link to="/login" className="btn btn-lg btn-secondary">Watch Now</Link>
                    </p>
                </div>
            </main>
        </div>


    )
}

export default Home