import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { HiOutlineMail, HiOutlineDocumentDownload } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import Particle from "./Particle.jsx";

const Header = () => {
  return (
    <header>
        <div className="h-screen bg-[var(--color-bg)] flex justify-center items-center">
          <Particle/>
          <div className="text-center absolute">
            <h1 className="text-6xl mb-3 font-semibold mb-5">
              I'm Jeffrey Li.
            </h1>
            <Typewriter
              words={phrases}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
            <div className="mt-5 flex justify-center gap-5">
              {socials.map(social => (
                <div className="text-gray-400 text-2xl hover:text-gray-500 transition-all">
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
    </header>
  );
};

const socials = [
  {
    icon: <AiOutlineInstagram />,
    text: "Instagram",
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

const phrases = [
  "hello :)",
  "a Software Developer",
  "NYC",
  "a twin bro",
  "MIT '27",
  "welcome to the site!",
];

export default Header;
