import { Button } from '@mui/material'
import React from 'react'
import './portfolio.scss'
const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h1>PortFoloi & Project Features</h1>

      <div className="features">
        <img src='https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/mongodb-branding-icon-symbol-logo-vector-_1540.png' alt="Error" />
        <span>MongoDB</span>
        <ul>
            <li>MongoDB: The database that’s as flexible as your data needs.</li>
            <li>In MongoDB, structure is a suggestion, not a rule.</li>
            <li>MongoDB: Where data is document-driven, not table-bound.</li>
        </ul>
        <div className="buttons">
            <Button>Video</Button>
            <Button>Source code</Button>
        </div>
      </div>

      <div className="features">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpCVrym3sQKRS3_hAnLQIocLuMJorvv0Jiw&s' alt="Error" />
        <span>Express js</span>
        <ul>
            <li>Express: The minimal and flexible Node.js web application framework that provides a robust set of features.</li>
            <li>With Express, simplicity meets power in server-side development.</li>
            <li>Express: Streamline your backend with a framework that’s as fast as your ideas.</li>
        </ul>
        <div className="buttons">
            <Button>Video</Button>
            <Button>Source code</Button>
        </div>
      </div>

      <div className="features">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s' alt="Error" />
        <span>React js</span>
        <ul>
            <li>React: Building user interfaces with a component-based architecture, one UI at a time.</li>
            <li>React: Where user experience meets efficient rendering.</li>
            <li>React: Empowering developers to create dynamic web applications with ease.</li>
        </ul>
        <div className="buttons">
            <Button>Video</Button>
            <Button>Source code</Button>
        </div>
      </div>

      <div className="features">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ8ZykYG8EI_WRXx6EWfNwgu4Hk15YIzzfw&s' alt="Error" />
        <span>Node js</span>
        <ul>
            <li>Node.js: JavaScript on the server side, bringing full-stack development to life.</li>
            <li>Node.js: The event-driven runtime that’s fast, scalable, and designed for real-time applications.</li>
            <li>Node.js: Unleashing the power of JavaScript beyond the browser.</li>
        </ul>
        <div className="buttons">
            <Button>Video</Button>
            <Button>Source code</Button>
        </div>
      </div>

    </div>
  )
}

export default Portfolio
