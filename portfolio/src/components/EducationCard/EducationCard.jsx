import React from 'react'
import "./EducationCard.scss"

const EducationCard = () => {
  return (
    <div className="educationCard">
        <div className="wrap">
            <span className='title'>2022-2023 CodeAcademy Courses</span>
            <span>- Full-Stack Engineer</span>
            <span>- Learn PHP</span>
            <span>- Learn Bootstrap</span>
            <span>- Learn Python 3</span>
            <span>- Learn jQuery</span>
        </div>
        <div className="wrap">
            <span className='title'>2016-2020 University of Nottingham - BEng Electrical and Electronic Engineering</span>
            <span>Modules such as :</span>
            <span>- Advanced Engineering Mathematics</span>
            <span>- Engineering Design Solutions and Project Development</span>
            <span>- Computer Aided Engineering</span>
            <span>- Information and Systems</span>
        </div>
        <div className="wrap">
            <span className='title'>2011-2016 Bryanston School</span>
            <span>A-Levels - Mathematics A , Further Mathematics B , Physics B</span>
            <span>GCSE - Mathematics A* , English A*</span>
        </div>
    </div>
  )
}

export default EducationCard