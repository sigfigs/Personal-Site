import React from 'react'
import {AiOutlineHome, AiOutlineTool, AiOutlineProject} from 'react-icons/ai';
import {TbSchool} from 'react-icons/tb';
import {RiContactsLine} from 'react-icons/ri';

const Nav = () => {
  return (
    <nav className="mt-24 p-4 flex justify-center gap-3 bg-gray-300 rounded-[60px] w-max m-auto shadow-2xl">
      <a href="#" className="text-3xl rounded-full hover:bg-gray-200 p-2"><AiOutlineHome/></a>
      <a href="#education" className="text-3xl rounded-full hover:bg-gray-200 p-2"><TbSchool/></a>
      <a href="#skills" className="text-3xl rounded-full hover:bg-gray-200 p-2"><AiOutlineTool/></a>
      <a href="#portfolio" className="text-3xl rounded-full hover:bg-gray-200 p-2"><AiOutlineProject/></a>
      <a href="#contact" className="text-3xl rounded-full hover:bg-gray-200 p-2"><RiContactsLine/></a>
    </nav>
  )
}

export default Nav