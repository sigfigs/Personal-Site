import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { HiOutlineMail, HiOutlineDocumentDownload } from "react-icons/hi";
import { RiLinkedinBoxLine } from "react-icons/ri";

const Header = () => {
  const socials = [
    {
      icon: <AiOutlineInstagram />,
      text: "Instagram",
    },
    {
      icon: <RxDiscordLogo />,
      text: "Discord",
    },
    {
      icon: <AiOutlineFacebook />,
      text: "Facebook",
    },
    {
      icon: <AiOutlineGithub />,
      text: "Github",
    },
    {
      icon: <AiOutlineLinkedin />,
      text: "Linkedin",
    },
    {
      icon: <HiOutlineDocumentDownload />,
      text: "CV",
    },
  ];

  return (
    <header>
      <div className="lg:pt-36 md:pt-20 pt-6 h-screen">
        <div className="text-center">

          <h1 className="text-6xl mb-3 font-semibold mt-10">I'm Jeffrey Li,</h1>
          <h1 className="text-6xl font-semibold mb-10">A Computer Science Student</h1>
          {/* <h1 className="text-6xl font-semibold mb-10">Student.</h1> */}
          <h3 className="text-3xl font-light text-black">📍NYC</h3>

          {/* Socials */}
          <div className="flex justify-between flex-wrap w-10/12 m-auto gap-3 mt-10 text-white">
            {socials.map(social => (
              <div className="flex justify-center bg-gray-700 w-[150px] m-auto p-3 rounded-md shadow-gray-400 shadow-xl drop-shadow-md hover:-translate-y-2 transition-all">
                <div className="text-[#C13584] text-4xl">{social.icon}</div>
                <p className="mt-1 ml-1">{social.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
