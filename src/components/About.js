import React from 'react';
import myPic from '../images/me.jpeg';
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div id='about' className="flex-grow flex overflow-hidden sm:h-screen text-white">

      <aside className="right flex h-full overflow-hidden">

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-4/5'>
          <p className='text-pink-600'>It's </p>
          <h1 className='text-4xl sm:text-6xl font-bold text-white'>About me</h1>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, blanditiis magni itaque, perferendis cupiditate suscipit quo, impedit harum quas facere autem unde. <br /> Debitis nesciunt totam perferendis eligendi voluptates magni aspernatur. consectetur adipisicing elit. Commodi eligendi, et nemo aliquid impedit temporibus obcaecati porro iusto architecto veritatis quos dolorem. Tenetur, dignissimos aperiam consequatur similique voluptatem perspiciatis eveniet provident necessitatibus accusamus non odio recusandae? Non reiciendis autem dolore dignissimos cupiditate minima temporibus esse tempora fugiat a. Autem, ratione.</p>
          <div>
            <Link to='#contact' >
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> Let's Connect <HiArrowNarrowRight className='ml-3' /> </button>
            </Link>
          </div>

        </div>

      </aside>

      <aside className="left flex w-2/5 h-full">
        <img src={myPic} alt="MyPic" className="w-full h-full object-cover object-center opacity-50" />
      </aside>

    </div>

  )
}

export default About