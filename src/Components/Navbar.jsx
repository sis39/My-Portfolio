
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Navbar = () => {
  return <nav className=" mb-10 flex items-center justify-between py-6"> 
    
     <div className="flex flex-shrink-0 items-center text-white text-3xl font-style: italic">
      PS
     </div>
     <div className=" m-6 flex justify-center items-center gap-4 text-2xl ">
      < FaInstagram/>
      <FaLinkedin/>
      <FaGithub/>
     <FaFacebook />
     </div>
     
  </nav>
  
}

export default Navbar

