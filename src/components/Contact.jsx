import { CONTACT } from "../constants"
import Contact0 from "../assets/contact0.png"
import { MdEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import { motion } from "framer-motion"
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";


const Contact = () => {
  return (
    <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration:1.5}}
    className="border-b border-neutral-400 pb-20">
        <h1 className="my-10 text-center text-4xl underline underline-offset-8 font-bold">Get in Touch</h1>
        
        <div className="grid grid-cols-2 items-center justify-centerate-400 p-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl mx-15">
        
            
                <div className="flex flex-col text-center justify-center">
                    <form action="">

                    <div className="flex flex-row text-center justify-center gap-3">
                    <label htmlFor="">First Name</label>
                    <input type="text"  className="rounded-full bg-stone-400 mb-5 h-10 w-80 text-gray-900"/> 
                    </div>

                    <div className="flex flex-row text-center justify-center gap-3">
                    <label htmlFor="" className="mr-10">Email</label>
                    <input type="email" className="rounded-full bg-stone-400 text-gray-900 mb-5 h-10 w-80"/>
                    </div>

                    <div className="flex flex-row text-center justify-center gap-3">
                    <label htmlFor="" className="mr-3">Message</label>
                    <input type="message" width={20} height={40}  className=" bg-stone-400 text-gray-900 rounded-2xl h-60 w-80 mb-5"/>                   
                    </div>

                    </form>
                    
                    <div>
                        <button className="bg-gradient-to-r from-blue-800 to-blue-400 rounded-full py-3 px-8 text-xl hover hover:bg-sky-950">Submit</button>
                    </div>

                </div>
                           
            
        

        <div>
            <img src={Contact0} alt="" />
        </div>
        

        </div>
        
<hr className="text-2xl text-gray-500 mt-10"></hr>
        
         <div className="text-center justify-center mt-8">
         <motion.div
         whileInView={{opacity:1, x:0}}
         initial={{opacity: 0, x: 100}}
         transition={{duration:1.5}}
         className="flex flex-col-2 mb-5">
                <div className="mr-8">
                <MdEmail className="text-3xl text-green-600" />
                </div>
                
                <a>nimesha2020kalutara@gmail.com</a>
                

            </motion.div>

            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration:1.5}}
            className="flex flex-col-2">
                <div className="mr-8">
                <PiPhoneFill className="text-3xl text-blue-600" />
                </div>
                <div>
                <p className="">+76 267 6344</p>
                </div>

            </motion.div>

            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration:1.5}}
            className="flex flex-col-2 mt-4">
                <div className="mr-8">
                <PiMicrosoftOutlookLogoFill className="text-3xl text-sky-800" />
                </div>
                <div>
                <p className="">medagod-cs20014@stu.kln.ac.lk</p>
                </div>

            </motion.div>

         </div>
            
           
        
    </motion.div>
  )
}

export default Contact