import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  return (
    <div className="">
      <div className="mt-20 lg:mx-20 md:mx-12 mx-6 h-auto">
      <h1 className="lg:text-5xl text-4xl text-center font-bold mb-20">Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {projects.map( (project) => (
          <div className="shadow-gray-300 shadow-xl rounded-md hover:opacity-80 duration-500 cursor-pointer mb-auto">
            <a href={project.link} target="_blank" rel="noreferrer">
              <img className="" src={project.imageURL} alt="" />
            </a>
            <div>
              <h1 className="text-black m-4">{project.title}</h1>
            </div>
            <div className="text-gray-600 m-4 text-sm">{project.body}</div>

            <hr className="mx-3"></hr>
            <div className="flex justify-left m-4">
              <a className="mt-3 text-gray-400 text-xl hover:opacity-70" href="https://github.com">
                {project.icon}
              </a>
              <div className="text-gray-400 text-sm m-3">{project.langs}</div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

const fillerImage = "https://st4.depositphotos.com/9485312/21658/i/600/depositphotos_216581194-stock-photo-illustration-orange-polygonal-nice-multicolor.jpg";

const projects = [
  {
    title: "School Club App",
    imageURL:
      fillerImage,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon:  <AiFillGithub />,
    langs: "Flutter, Dart, PostgreSQL"
  },
  {
    title: "Bronx Science NHS Website",
    imageURL:
      "/assets/projects/bxsci_nhs_website.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    langs: "ReactJS, Tailwind",
    icon: <AiFillGithub />,
    link: "https://bxscinhs.vercel.app/"
  },
  {
    title: "3D Animation of Cancer",
    imageURL:
      "/assets/projects/3d animation dna.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    langs: "Python, Maya",
    link: "https://www.youtube.com/watch?v=mRDQ30rnnb4"
  },
  
];

export default Portfolio;
