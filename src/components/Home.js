import React from 'react';
import myPic from '../images/me.jpeg';
import { ReactTyped } from 'react-typed';
import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
  return (
    <div className="home flex-grow h-[calc(100vh-4rem)] flex overflow-hidden">


      <aside className="left flex w-2/5 h-full">
        <img src={myPic} alt="MyPic" className="w-full h-full object-cover object-center opacity-50" />
      </aside>


      <aside className="right flex h-full overflow-hidden">

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-2/3'>
          <p className='text-pink-600'>Hi, my name is </p>
          <h1 className='text-4xl sm:text-6xl font-bold text-white'>Rahul</h1>
          <h2 className='text-3xl sm:text-5xl font-bold text-[#ffffffbd]'>
            <ReactTyped strings={["I'm a developer."]} typeSpeed={80} backSpeed={50} backDelay={3000} loop ></ReactTyped>
            </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>Specializing in building web apps. As a perpetual learner and aspiring innovator,
            I thrive on transforming ideas into tangible solutions through code
            & eager to learn more.</p>
          <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> View Work <HiArrowNarrowRight className='ml-3' /> </button>
          </div>

        </div>

      </aside>


    </div>
  );
}

export default Home;
