import React from 'react'
import skills from './data/skills.json'

const Skills = () => {
  return (
    <>
      <div className="container skills" id='skills'>
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data) => (
            <>
              <div className='item'
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <img src={`./assets/${data.imageSrc}`} alt="" />
                <h2>{data.title}</h2>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills