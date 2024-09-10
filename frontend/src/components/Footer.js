import React from 'react'

const Footer = () => {
  return (
    // <footer className='bg-slate-200'>
    <>

<div className='container mx-auto p-4'>
       <p className='text-center font-bold' title="Youtube Channel">Dynamic Coding with Santosh</p>
      </div>

    {/* // </footer> */}
     <footer className="bg-gray-800 text-white py-8">
     <div className="container mx-auto px-4">
         <div className="flex flex-wrap justify-between">
             {/* About Section */}
             <div className="w-full md:w-1/3 mb-6 md:mb-0">
                 <h3 className="text-lg font-semibold mb-4">About Me</h3>
                 <p>
                     I'm a passionate MERN stack developer with experience in building modern web applications. Feel free to reach out to me for any collaborations or projects.
                 </p>

                 <p>
                            Rohini sec - 22,<br />
                            new Delhi, 110086,<br />
                            India
                        </p>
             </div>

             {/* Contact Information */}
             <div className="w-full md:w-1/3 mb-6 md:mb-0">
                 <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                 <ul>
                     <li>
                         <strong>Email:</strong> santoshkr1592000@gmail.com
                     </li>
                     <li>
                         <strong>Phone:</strong> +91 7033825186
                     </li>
                     <li>
                         <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/santosh-kumar-3a9939228" className="text-blue-400" target="_blank" rel="noopener noreferrer">Santosh Kumar</a>
                     </li>
                     <li>
                         <strong>GitHub:</strong> <a href="https://github.com/iamsantoshku" className="text-blue-400" target="_blank" rel="noopener noreferrer">santoshkumar</a>
                     </li>
                 </ul>
             </div>
              {/* Address Section */}
              {/* <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Address</h3>
                        <p>
                            123 Developer Lane,<br />
                            Tech City, 456789,<br />
                            Country Name
                        </p>
                    </div> */}

             {/* Quick Links */}
             <div className="w-full md:w-1/3">
                 <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                 <ul>
                     <li>
                         <a href="/" className="hover:text-gray-400">Home</a>
                     </li>
                     <li>
                         <a href="/about" className="hover:text-gray-400">About</a>
                     </li>
                     <li>
                         <a href="/projects" className="hover:text-gray-400">Projects</a>
                     </li>
                     <li>
                         <a href="/contact" className="hover:text-gray-400">Contact</a>
                     </li>
                 </ul>
             </div>
         </div>

         <div className="mt-8 text-center text-sm text-gray-500">
             <p>&copy; {new Date().getFullYear()} Santosh Kumar. All Rights Reserved.</p>
         </div>
     </div>
 </footer>
    </>
     
  )
}

export default Footer