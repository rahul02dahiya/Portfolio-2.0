import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { AiFillInstagram } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import resume from "../images/resume.pdf"

const Contact = () => {

  const handleDownload = () => {
    const resumeUrl = resume;

    // Create a temporary anchor element
    const downloadLink = document.createElement("a");

    // Set the href attribute to the file URL
    downloadLink.href = resumeUrl;

    // Setting up the download attribute with the desired file name
    downloadLink.download = "RahulResume.pdf";

    // Append the anchor element to the document
    document.body.appendChild(downloadLink);

    // Trigger a click event on the anchor element
    downloadLink.click();

    // Remove the anchor element from the document
    document.body.removeChild(downloadLink);
  };

  return (
    <div id='contact' className="flex-grow flex-col flex overflow-hidden sm:h-screen justify-center items-center text-white p-4">

      <div className='w-full max-w-5xl flex flex-col lg:flex-row h-4/5'>

        <div id="contact-form" className='w-full lg:w-3/5 bg-[#0000003a] h-full flex justify-center items-center p-4'>
          <form method='POST' action="https://getform.io/f/8439b9cf-48bb-429f-9e3a-1973f8156046" className='flex flex-col w-full max-w-lg'>
            <div className='pb-4'>
              <p className='text-2xl font-bold inline text-gray-300'>Contact Us</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 text-black' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 text-black' name="message" rows="8" placeholder='Message' style={{ resize: "none" }}></textarea>
            <button className='text-white border-2 hover:bg-[#ffffff72] px-4 py-3 my-6 mx-auto flex items-center'>Let's Collaborate</button>
          </form>
        </div>

        <div id="contact-social" className='w-full lg:w-2/5 h-full flex flex-col justify-center items-center p-4'>
          <ul className='flex flex-col justify-around items-center h-full w-full'>
            <li className='w-full h-[60px] p-4 bg-[#5dce9f] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-200'
                href="#contact">
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-full h-[60px] p-4 bg-[#0077b5] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-200'
                href="https://www.linkedin.com/in/rahul-dahiya-279720220/" target="_blank">
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-full h-[60px] p-4 bg-[#333333] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-200'
                href="https://github.com/rahul02dahiya" target="_blank">
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className='w-full h-[60px] p-4 bg-[#ff436c] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-200'
                href="https://www.instagram.com/rddahiya3/" target="_blank">
                Instagram <AiFillInstagram size={30} />
              </a>
            </li>
            <li onClick={handleDownload} className='w-full h-[60px] p-4 bg-[#ffffff51] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-200'>
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Contact
