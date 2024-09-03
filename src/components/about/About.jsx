import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      <div className="main">

        <div className="education">
          <h1>Education & Training</h1>
          <p>Degree/ <span className='text-blue-600 font-medium'>BS COMPUTER SCIENCE</span>, Institution / <span className='text-blue-600 font-medium'>UNIVERSITY OF HARIPUR</span>, Year / <span className='text-blue-600 font-medium'>2024</span></p>
        </div>

        <div className="education">
          <h1>Skills & Expertise</h1>
          <div className='skill-section'>
            <p>Proficient in Programming Languages</p>
            <div className='text-blue-600 font-medium'>
              HTML, CSS, JAVASCRIPT 
              <div className='text-green-500'>JOHNS HOPKINS UNIVERSITY AMERICA</div>
            </div>
            <hr/>
          </div>

          <div className='skill-section'>
            <div className='text-blue-600 font-medium'>
              CLOUD COMPUTING APPLICATION 
              <div className='text-green-500'>UNIVERSITY OF ILLINOIS AT URBANA-CHAMPAIGN AMERICA</div>
            </div>
            <hr/>
          </div>

          <div className='skill-section'>
            <div className='text-blue-600 font-medium'>
              EXCEL SKILLS FOR BUSINESS : ESSENTIAL 
              <div className='text-green-500'>MACQUARIE UNIVERSITY OF SYDNEY, AUSTRALIA</div>
            </div>
            <hr/>
          </div>

          <div className='skill-section'>
            <div className='text-blue-600 font-medium'>
              REACT, NODE JS, MONGOOSE, EXPRESS, BOOSTRAP, TAILWIND CSS
              <div className='text-green-500'>I HAVE MORE THAN TWO YEARS EXPERIENCE ABOVE TECHNOLOGIES</div>
            </div>
            <hr/>
          </div>

          <p>Experienced with [Software Tools/Technologies]</p>
          <p>Strong grasp of [Design Principles/Concepts]</p>
          <p>Excellent problem-solving skills</p>
          <p>Effective communicator and collaborator</p>
        </div>

        <div className="education">
          <h1>Professional Experience</h1>
          <p><span className='text-blue-600 font-medium'>Job Title / REACT</span>, Company / <span className='text-green-500'>Contour Software Islamabad</span>, Date / 2023</p>
          <p>Brief description of responsibilities and achievements</p>
          <p>Brief description of projects and contributions</p>
        </div>

        <div className="education">
          <h1>Achievements & Awards</h1>
          <p>Award/ <span className='text-blue-600 font-medium'>REACT JAVASCRIPT HTML CSS NODE MONGOOSE CERTIFICATE</span></p>
        </div>

        <div className="education">
          <h1>Mission Statement</h1>
          <p className='text-blue-600 font-medium'>As a passionate full-stack developer, my mission is to craft seamless and innovative digital solutions that bridge the gap between user experience and robust functionality. I am committed to continuous learning, leveraging cutting-edge technologies, and collaborating effectively to deliver high-quality web applications that solve real-world problems and drive success for my clients and projects.</p>
        </div>

      </div>
    </div>
  );
}

export default About;