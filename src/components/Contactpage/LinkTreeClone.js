
import '../../pages/style.css';
import headShot from "../../Assets/headShot.png";
import {FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";



function linkTreeClone () {

    const links = [
        {
        url: "https://github.com/leahkatherine",
        title:"GitHub",
        icon: <FaGithub/>
        }, 
        {
          url:"https://www.instagram.com/leahanestos/",
          title:"Instagram",
          icon:<FaInstagram/>
        }, 
        {
          url:"https://www.linkedin.com/in/leah-anestos-077bb721a/" ,
          title:"LinkedIn",
          icon:<FaLinkedin/>
        }
      ];
    
      return (
        <div className="">
            <img src={headShot} className="headShot w-100 h-100 flex justify-center items-center" alt="logo" />
            <ul className="flex flex-col w-full">
          {
            links.map((link, index) => (
              <li key={index} className="cursor-pointer m-2 py-3 px-10 border-black border-2 text-sm md:text-md text-slate-900">
                <a href={link.url} className="flex items-center" title={link.title} target="_blank" rel="noreferrer">
                {link.icon} <p>{link.title}</p>
                </a>
              </li>
            ))
          }
        </ul>
        </div>
      );
}

export default linkTreeClone;