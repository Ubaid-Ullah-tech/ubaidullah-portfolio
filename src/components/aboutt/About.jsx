import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 mt-20">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav>
          <a href="/certification" className="hover:underline mx-2">Certification</a>
            <a href="/" className="hover:underline mx-2">Home</a>
            <a href="/about" className="hover:underline mx-2">About</a>
            <a href="/contact" className="hover:underline mx-2">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-6">
          Hello <span className='text-blue-500 font-bold'>my name is ubaid ullah </span>  
           As a dedicated React developer with a strong foundation in Node.js, Mongoose, and Express, I specialize in creating dynamic and efficient web applications. My expertise spans front-end development with React, where I craft intuitive and responsive user interfaces, and back-end development with Node.js and Express, where I build robust server-side solutions. With a keen eye for detail and a passion for clean, maintainable code, I strive to deliver high-quality, full-stack applications that meet both user needs and technical standards.
          </p>
          
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">My Skills</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>React.js & Redux</li>
              <li>Node.js & Express</li>
              <li>MongoDB & Mongoose</li>
              <li>HTML & CSS</li>
              <li>JavaScript (ES6+ ES7)</li>
              <li>Tailwind CSS & SCSS</li>
              <li>Git & GitHub</li>
              <li>Vercel</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Experience</h3>
            <p>
              Over the years, I’ve worked on various projects, from personal portfolios to large-scale applications. I’ve collaborated with teams to build scalable solutions and am always eager to learn new technologies and improve my skills.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contact Me</h3>
            <p>
              Feel free to reach out to me through the <a href="/contact" className="text-blue-600 hover:underline">Contact</a> page if you’d like to work together or just say hello.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;

















// import React from 'react'
// import ubaid from '../../image/ubaidd.jpg'
// const About = () => {
//     return (
//         <div className='max-w-screen-2xl container mx-auto md:px-20 px-9 mb-10'>
//             <div className='text-2xl mt-20 pt-10 text-center'>
//           <h1 className='mb-10 font-bold'>About <span className='text-blue-600'> Here !</span></h1>
//           <div style={{marginBottom:'60px', display:'flex' , justifyContent:'center' , alignItems:'center'}}>
//             <img style={{width:'300px',height:'290px' , borderRadius:'50%'}} src={ubaid} alt="Error" />
//           </div>
//           <p className='mb-10'>
//           Ubaid is an avid reader who finds inspiration and motivation in the power of words. With a keen interest in self-improvement and personal growth, Ubaid gravitates towards books that offer practical wisdom and insightful strategies for living a more fulfilling life. Always on the lookout for books that can make a meaningful impact, Ubaid enjoys exploring titles that are not only concise but also packed with actionable advice.
//           </p>
//           <a href='/'>
//           <button className="btn btn-success" >Back to Home Page</button>  
//           </a>
         
//             </div>
             
//         </div>
//       )
// }

// export default About