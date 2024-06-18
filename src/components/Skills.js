import React, {useState, useEffect} from 'react'

import skillData from "../data/skills.json"


const Skills = () => {

  const [skillImgs,setSkillImgs ] = useState([]);

  useEffect(()=>setSkillImgs(skillData.skills),[])

  return (
<div id='skills' className="flex-grow flex overflow-hidden h-screen text-white">      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>

        {/* Page heading */}
        <div>
          <p className='py-4 text-pink-600'>These are the technologies I've worked with ; )</p>
        </div>

        {/* Container for images */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 justify-around text-center py-8'>
          
         {
          skillImgs.map(skill => (
            <div key={skill.id} className='shadow-sm shadow-[#72b4ff57] hover:scale-110 hover:bg-[#9cc7ff24] p-2 rounded-xl duration-500'>
            <img className='w-20 mx-auto' src={skill.image} alt="HTML icon" />
            <p className='my-4'>{skill.name}</p>
          </div>
          ))
         }
         
        </div>


      </div>

    </div>
  )
}

export default Skills