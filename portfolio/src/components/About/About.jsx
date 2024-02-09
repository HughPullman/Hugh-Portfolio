import React, { useState } from 'react'
import "./About.scss"
import SkillsCard from '../SkillsCard/SkillsCard'
import EducationCard from '../EducationCard/EducationCard'
import ExperienceCard from '../ExperienceCard/ExperienceCard'


const About = () => {

    const [info, setInfo] = useState('skills')

  return (
    <div className="about" id="about" name="about">
        <div className="left">
            <div className="info">
                <h1>About Me</h1>
                <p>I am an electrical and electronic engineering graduate from the University of Nottingham, I have also recently completed several coding courses with Code Academy and IT careers switch.
                    I am comfortable either working autonomously or as part of a group.  
                    I have a hardworking, honest, organised and practical down-to-earth approach to life with years of experience working in restaurants and pubs, whilst completing my education, and a year working in warehouse and dispatch sectors and summers spent in a water sports centre management role.
                    From a military family, I have moved home location frequently and spent years travelling whilst in boarding school. I have since enjoyed solo travelling the world when I can. 
                </p>
            </div>
            <div className="wrapper">
                <div className="item" >
                    <span onClick={()=> setInfo('skills')}>Skills</span>
                </div>
                <div className="item" >
                    <span onClick={()=> setInfo('education')}>Education</span>
                </div>
                <div className="item" >
                    <span onClick={()=> setInfo('experience')}>Experience</span>
                </div>
            </div>
            <div className="selectedInfo">
                {
                    (info === 'skills') && <SkillsCard/>
                }
                {
                    (info === 'education') && <EducationCard/>
                }
                {
                    (info === 'experience') && <ExperienceCard/>
                }
            </div>
        </div>
        <div className="right">
            <img src="/img/HughImg1.png" alt="" />
        </div>
    </div>
  )
}

export default About