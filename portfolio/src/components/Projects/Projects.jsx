import React from 'react'
import "./Projects.scss"
import LaunchIcon from '@mui/icons-material/Launch';
import {Link} from "react-router-dom"

const Projects = () => {
  return (
    <div className="projects" id="projects" name="projects">
        <div className="title">
            <span>My Work</span>
        </div>
        <div className="projectCards">
        <div className="work">
                <img src="/img/HughStore.png" alt="" />
                <div className="layer">
                    <h3>E-commerce clothing website</h3>
                    <p>This project is a functioning clothing store allowing you to browse, filter, add to cart and checkout clothing.<br></br><br></br>Javascript, HTML, React and Sass.</p>
                    <Link className='link' to='https://hughpullman.co.uk/hughstore' target='_blank'><LaunchIcon className='icon'/></Link>
                </div>
            </div>
            <div className="work">
                <img src="/img/spotifyvisual.png" alt="" />
                <div className="layer">
                    <h3>Spotify Audio-Visualizer</h3>
                    <p>This is my attempt at an audio-visualizer using the spotify api, it allows you to log in to your spotify and access all the usual features while using the current track audio analysis api to create a Three.js rendered animtation.<br></br><br></br>Javascript, HTML, React, Sass, Three.js.</p>
                    <Link className='link' to='https://hughpullman.co.uk/spotifyvisual' target='_blank'><LaunchIcon className='icon'/></Link>
                </div>
            </div>
            <div className="work">
                <img src="/img/HughsFoods.png" alt="" />
                <div className="layer">
                    <h3>Fast food website</h3>
                    <p>This website allows you to browse a variety of fast food options, such as meal deals, proceeding to add them to a basket and checkout.<br></br><br></br>Javascript, HTML, React and Sass.</p>
                    <Link className='link' to='https://hughcwpullman.co.uk' target='_blank'><LaunchIcon className='icon'/></Link>
                </div>
            </div>
            <div className="verticalCards">
            <div className="work">
                <img src="/img/gazetter.png" alt="" />
                <div className="layer">
                    <h3>Gazetteer</h3>
                    <p>This project loads your country and displays a world map at this location with a number of nearby cities and airports. It allows you to set the country and will zoom to it and highlight the border. It will also provide a variety of information on these locations. <br></br><br></br>Javascript, JQuery, HTML, CSS and PHP.</p>
                    <Link className='link' to='https://hughcwpullman.co.uk/map' target='_blank'><LaunchIcon className='icon'/></Link>
                </div>
            </div>
            <div className="work">
                <img src="/img/companyD.png" alt="" />
                <div className="layer">
                    <h3>Company Directory</h3>
                    <p>This project is a company directory website which allows interaction with a database to view, update and delete personnel and departments within the company.<br></br><br></br>Javascript, JQuery, HTML, CSS and PHP.</p>
                    <Link className='link' to='https://hughcwpullman.co.uk/companydirectory' target='_blank'><LaunchIcon className='icon'/></Link>
                </div>
            </div>
            </div>
            <div className="work">
                <img src="/img/spaceInvaders.png" alt="" />
                <div className="layer">
                    <h3>Space Invaders game</h3>
                    <p>This project is a re-creation of the classic arcade game Space Invaders.<br></br><br></br>Javascript, HTML, CSS.</p>
                    <Link className='link' to='https://hughpullman.co.uk/spaceinvaders' target='_blank'><LaunchIcon className='icon'/></Link>
                </div>
            </div>
            <div className="work">
                <img src="/img/runAndGun.png" alt="" />
                <div className="layer">
                    <h3>Run and Gun arcade game</h3>
                    <p>This project is a classic arcade stlye run and gun game where you attempt to dodge or kill enemies racking up a score.<br></br><br></br>Javascript, HTML, CSS.</p>
                    <Link className='link' to='https://hughpullman.co.uk/cyborgjump' target='_blank'><LaunchIcon className='icon'/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects