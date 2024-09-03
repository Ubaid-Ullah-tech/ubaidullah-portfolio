import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    // Here you can handle form submission, e.g., send data to server
    setFormSubmitted(true);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Display alert message
    alert('Message sent successfully!');
  };

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
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-6">Feel free to reach out to me using the form below or through my contact details.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15.5a2.5 2.5 0 0 1-2.5 2.5H5.5A2.5 2.5 0 0 1 3 15.5V5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v10z"/>
                  <path d="M16 3v0a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3z"/>
                </svg>
                <span>ubaidullah.uoh@gmail.com</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5.5 3H18.5A2.5 2.5 0 0 1 21 5.5V15.5A2.5 2.5 0 0 1 18.5 18H5.5A2.5 2.5 0 0 1 3 15.5V5.5A2.5 2.5 0 0 1 5.5 3z"/>
                  <path d="M9 3v12m6-12v12"/>
                </svg>
                <span>(+92) 349-3673578</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12l-6 6-6-6"/>
                  <path d="M21 6l-6 6-6-6"/>
                </svg>
                <span>123 Main Road, Buner, Pakistan</span>
              </p>
            </div>
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

export default Contact;





















// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload on form submission
//     // Here you can handle form submission, e.g., send data to server
//     setFormSubmitted(true);
//     // Reset the form after submission
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//     // Display alert message
//     alert('Message sent successfully!');
//   };

//   return (
//     <div className="bg-gray-100 text-gray-800 mt-20">
//       {/* Header */}
//       <header className="bg-blue-600 text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">My Portfolio</h1>
//           {/* <nav>
//             <a href="/Certification" className="hover:underline mx-2">Certification</a>
//             <a href="/" className="hover:underline mx-2">Home</a>
//             <a href="/about" className="hover:underline mx-2">About</a>
//             <a href="/contact" className="hover:underline mx-2">Contact</a>
//           </nav> */}

// <nav>
//           <a href="/certification" className="hover:underline mx-2">Certification</a>
//             <a href="/" className="hover:underline mx-2">Home</a>
//             <a href="/about" className="hover:underline mx-2">About</a>
//             <a href="/contact" className="hover:underline mx-2">Contact</a>
//           </nav>

//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto p-6">
//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
//           <p className="mb-6">Feel free to reach out to me using the form below or through my contact details.</p>

//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Contact Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Send Message
//               </button>
//             </form>

//             {/* Contact Information */}
//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
//               <p className="flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M21 15.5a2.5 2.5 0 0 1-2.5 2.5H5.5A2.5 2.5 0 0 1 3 15.5V5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v10z"/>
//                   <path d="M16 3v0a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3z"/>
//                 </svg>
//                 <span>ubaidullah.uoh@gmail.com</span>
//               </p>
//               <p className="flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M5.5 3H18.5A2.5 2.5 0 0 1 21 5.5V15.5A2.5 2.5 0 0 1 18.5 18H5.5A2.5 2.5 0 0 1 3 15.5V5.5A2.5 2.5 0 0 1 5.5 3z"/>
//                   <path d="M9 3v12m6-12v12"/>
//                 </svg>
//                 <span>(+92) 349-3673578</span>
//               </p>
//               <p className="flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M21 12l-6 6-6-6"/>
//                   <path d="M21 6l-6 6-6-6"/>
//                 </svg>
//                 <span>123 Main road, buner, pakistan</span>
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white p-4">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 My Portfolio. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Contact;
