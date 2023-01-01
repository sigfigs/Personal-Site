import React from "react";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    title: "Bronx Science NHS Website",
    imageURL:
      "https://st4.depositphotos.com/9485312/21658/i/600/depositphotos_216581194-stock-photo-illustration-orange-polygonal-nice-multicolor.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    langs: "ReactJS, Tailwind",
    icon: <AiFillGithub />,
  },
  {
    title: "Bronx Science NHS Website",
    imageURL:
      "https://st4.depositphotos.com/9485312/21658/i/600/depositphotos_216581194-stock-photo-illustration-orange-polygonal-nice-multicolor.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Bronx Science NHS Website",
    imageURL:
      "https://st4.depositphotos.com/9485312/21658/i/600/depositphotos_216581194-stock-photo-illustration-orange-polygonal-nice-multicolor.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Bronx Science NHS Website",
    imageURL:
      "https://st4.depositphotos.com/9485312/21658/i/600/depositphotos_216581194-stock-photo-illustration-orange-polygonal-nice-multicolor.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Portfolio = () => {
  return (
    <div className="">
      <h1 className="lg:text-6xl text-5xl text-center font-bold pt-40 pb-16">Projects!</h1>

      <div className="h-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
        {projects.map(project => (
          <div className="shadow-gray-300 shadow-xl rounded-md hover:scale-[1.02] duration-500 cursor-pointer">
            <div className="">
              <img className="" src={project.imageURL} alt="" />
            </div>
            <div>
              <h1 className="text-black m-3">{project.title}</h1>
            </div>
            <div className="text-black m-3">{project.body}</div>

            <div className="flex justify-left m-3">
              <a className="mt-3 text-gray-400 " href="https://github.com">
                {project.icon}
              </a>
              <div className="text-gray-400 text-sm m-3">{project.langs}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
