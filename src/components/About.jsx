import React from "react";
import CodersRankSkillsChart from "@codersrank/skills-chart";
window.customElements.define("codersrank-skills-chart", CodersRankSkillsChart);

const About = () => {
  return (
    <div className="">
      <h1 className="text-6xl text-center font-bold p-16">About Me</h1>
      <div className="mb-16 gap-12 flex justify-around lg:flex-nowrap flex-wrap items-center">
        <img
          className="grow w-3/5 rounded-md shadow-gray-500 shadow-xl hover:scale-[1.02] duration-500 cursor-pointer"
          src="https://img.freepik.com/free-vector/hand-drawn-minimal-background_23-2149005484.jpg"
          alt=""
        />

        <div>
          <p classname="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <codersrank-skills-chart
        username="sigfigs"
        labels
        legend
        tooltip
        branding="false"
        svg-height ="220"
      ></codersrank-skills-chart>
    </div>
  );
};

export default About;
