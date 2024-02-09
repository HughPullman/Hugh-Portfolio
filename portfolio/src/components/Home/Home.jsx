import React from 'react';
import './Home.scss';


const Home = () => {
  return (
    <div className="home" id="home" name="about">
        <div className="left">
          <img src="/img/Hughpic.png" alt="" />
        </div>
        <div className="right">
          <span className='softwareDev'>Junior Software Developer</span>
          <span className='hello'>Hello,<br></br> I'm <span className='colouredText'>Hugh</span> Pullman</span>
        </div>
    </div>
  )
}

export default Home