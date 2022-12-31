import React from 'react'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai';
import {DiCss3, DiJavascript, DiDatabase} from 'react-icons/di';
import {SiTailwindcss} from 'react-icons/si';
import {GrReactjs} from 'react-icons/gr';
import {SiDart, SiFlutter, SiJava, SiPython, SiNodedotjs, SiPrisma} from 'react-icons/si';
import {RiFileExcel2Fill} from 'react-icons/ri';
import {VscGraphScatter} from 'react-icons/vsc';

const langs = [
  {
    icon:<AiFillHtml5/>,
    name: "HTML",
    year: 2022,
  },
  {
    icon: <DiCss3/>,
    name: "CSS",
    year: 2022,
  },
  {
    icon: <DiJavascript className="ml-6"/>,
    name: "Javascript",
    year: 2022,
  },
  {
    icon: <GrReactjs className="ml-2"/>,
    name: "ReactJS",
    year: 2022,
  },
  {
    icon: <SiTailwindcss className="ml-4"/>,
    name: "Tailwind",
    year: 2022,
  },
  {
    icon: <SiDart className="mr-1"/>,
    name:"Dart",
    year: 2022
  },
  {
    icon: <SiFlutter/>,
    name: "Flutter",
    year:2022
  },
  {
    icon: <SiJava/>,
    name: "Java",
    year: 2020
  },
  {
    icon: <SiPython className="ml-1"/>,
    name: "Python",
    year: 2021
  },
  {
    icon: <SiNodedotjs className="ml-2"/>,
    name: "Node.js",
    year: 2021
  },
  {
    icon: <AiFillGithub/>,
    name: "Git",
    year: 2022
  },
  {
    icon: <DiDatabase/>,
    name: "SQL",
    year: 2022
  },
  {
    icon: <RiFileExcel2Fill />,
    name: "Excel",
    year:2021
  },
  {
    icon:<VscGraphScatter className="m-auto"/>,
    name:"GraphPad Prism",
    year:2021
  }
];

const Skills = () => {
  return (
    <div className="">
    <h1 className="text-6xl text-center font-bold p-16 mt-36">Tech Stack</h1>

      <div className="grid lg:grid-cols-5 lg:gap-10 md:grid-cols-3 md:gap-5 grid-cols-2 gap-3">
        {langs.map(lang =>(
          <div className="content-center text-center m-auto">
          <div className="text-6xl text-center hover:scale-110 duration-500 cursor-pointer">{lang.icon}</div>
          <p className="text-xl mt-2">{lang.name}</p>
          <p className="text-sm text-gray-400 mt-2">{lang.year}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Skills