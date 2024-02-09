import React from 'react'
import "./SkillsCard.scss"

const SkillsCard = () => {
  return (
    <div className="skills">
        <div className="wrap">
            <span className='title'>Full-stack web development</span>
            <span>Experience using Javascript, CSS, SCSS, React, HTML, PHP, JQuery.</span>
        </div>
        <div className="wrap">
            <span className='title'>Teamwork and communication</span>
            <span>Led and participated in several group projects. Had leadership roles and participated in a number of sports teams.</span>
        </div>
        <div className="wrap">
            <span className='title'>Git and Github</span>
            <span>General use of version control tool and Github throughout CodeAcademy and IT career switch courses.</span>
        </div>
        <div className="wrap">
            <span className='title'>Database and SQL</span>
            <span>Understanding of SQL and PostgreSQL techinques.</span>
        </div>
    </div>
  )
}

export default SkillsCard