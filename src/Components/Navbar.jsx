
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return <nav className=" mb-10 flex items-center justify-between py-6"> 
    
     <div className="flex flex-shrink-0 items-center text-white text-3xl font-style: italic">
      PS
     </div>
     <div className=" m-6 flex justify-center items-center gap-4 text-2xl ">
     
     <a href="https://www.instagram.com/sanjanareddy_1/" target="_blank" >
      <FaInstagram />
    </a>
    <a href="https://www.linkedin.com/in/sanjana-reddy-79b7941aa/" target="_blank">
    <FaLinkedin/>
    </a>
      <a href="https://github.com/sis39" target="_blank">
      <FaGithub/>
      </a>
      
     
     </div>
     
  </nav>
  
}

export default Navbar

