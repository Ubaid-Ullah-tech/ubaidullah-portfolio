import React, { useEffect } from 'react';
import './home.scss';
import image from '../../image/ubaid.webp';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';


const Home = () => {
  return (
    <div className='home mt-20'>
      <div className="left">
        <img src={image} alt="Error" />
      </div>
      <div className="right">
        <h1>Welcome in my feed</h1>
        <h1>Hello</h1>
        <p className="mb-6">
          Hello <span className='text-blue-500 font-bold'>my name is ubaid ullah </span>
          As a dedicated React developer with a strong foundation in Node.js, Mongoose, and Express, I specialize in creating dynamic and efficient web applications. My expertise spans front-end development with React, where I craft intuitive and responsive user interfaces, and back-end development with Node.js and Express, where I build robust server-side solutions. With a keen eye for detail and a passion for clean, maintainable code, I strive to deliver high-quality, full-stack applications that meet both user needs and technical standards.
        </p>

        <div className="icons">
          <span>Available on</span>
          <div className="top-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookRoundedIcon />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
      <a href="/certification" className="mb-2 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Certification</a>
      <a href="/contact" className=" mb-2 inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">Contact</a>
      <a href="/about" className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300">About</a>
      <div className='mt-10 mb-4'>
        <h1 className='mb-4'>"Explore my websites by clicking the links below and discover what I've created!"</h1>
        <p className=' text-blue-500 font-bold mb-2 underline'>
          <a href="https://ubaid-book-store-jqp6.vercel.app/" target="_blank" rel="noopener noreferrer">
          https://ubaid-book-store-jqp6.vercel.app/
          </a>
        </p>

        <p className=' text-blue-500 font-bold  mb-2 underline'>
          <a href="https://ubaid-text-utils.vercel.app/" target="_blank" rel="noopener noreferrer">
            https://ubaid-text-utils.vercel.app/
          </a>
        </p>

        <p className=' text-blue-500 font-bold mb-2 underline'>
          <a href="https://ubaid-todo-app.vercel.app/" target="_blank" rel="noopener noreferrer">
            https://ubaid-todo-app.vercel.app/
          </a>

        </p>

        <div>
          <h2 className='mt-3'>"Check out my GitHub link to explore all my repositories and dive into my code!"</h2>
       
          <p className=' text-blue-500 font-bold mt-2 underline'>
          <a href="https://github.com/Ubaid-Ullah-tech?tab=repositories" target="_blank" rel="noopener noreferrer">
          Go_to_Github
          </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;

