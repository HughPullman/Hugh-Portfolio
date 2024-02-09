import React from 'react'
import "./ExperienceCard.scss"

const ExperienceCard = () => {
  return (
    <div className="experienceCard">
        <div className="wrap">
            <span className='title'>Oct 2022 - June 2023 Molly Malones Irish Bar</span>
            <span>Bar Staff - Serving customers food and drink during day and evening shifts whilst completing my CodeAcademy Courses.</span>
        </div>
        <div className="wrap">
            <span className='title'>Summers 2021/22/23 Pierhead Watersports</span>
            <span>General Management - Dealing with customers, Equipment Hire, Safety briefings, Saftey Boat driving, Watersports guidance.</span>
        </div>
        <div className="wrap">
            <span className='title'>Oct 2020 - Dec 2020 Boots Outbound Warehouse</span>
            <span>Warehouse Operative - working rotating day and night shifts picking and sorting items for company orders.</span>
        </div>
        <div className="wrap">
            <span className='title'>Summers 2012-2020 Hospitality Work</span>
            <span>A variety of jobs from bar staff to food catering and restaurant work.</span>
        </div>
    </div>
  )
}

export default ExperienceCard