
import {FaInstagram, FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
       <div className='flex flex-shrink-0 items-center'>
            <p className="text-3xl text-white font-bold bg-blue-950 p-2 rounded-md">Portfolio</p>
       </div>
       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="http://www.linkedin.com/in/nimesha-dilshan"><FaLinkedin /></a>
        <a href="http://github.com/medagoda"><FaGithub /></a>
        <a href="http://"><FaInstagram /></a>
        <a href="http://"><FaSquareXTwitter /></a>
        
        
        
        
       </div>
    </nav>
  )
}

export default Navbar