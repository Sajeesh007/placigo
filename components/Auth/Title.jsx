import { motion } from "framer-motion";

export default function Title() {
  return (
    <div>
        {/* title with motto */}
        <div className='flex flex-col space-y-4 px-6'>
            {/* Placing with logo */}
            <div >
                <h4>placigo</h4>
            </div>
            {/* motto */}
            <div className='flex flex-col'>
                <motion.h2  
                  animate={{ backgroundColor: ["rgba(255,255,255,1)", "#faf", "rgba(255,255,255,1)",] }} 
                  transition={{ repeatType: "mirror",repeatDelay: 6, duration: 4, repeat: Infinity, delay:0 }}
                  className='font-extrabold gradient-text'>
                  Your
                </motion.h2>

                <motion.h2  
                  animate={{ backgroundColor: ["rgba(255,255,255,1)", "#2a0", "rgba(255,255,255,1)"] }} 
                  transition={{ repeatType: "mirror", duration: 4, repeatDelay: 6, repeat: Infinity, delay:3 }}
                  className='font-extrabold gradient-text'>
                  Placement
                </motion.h2>

                <motion.h2  
                  animate={{ backgroundColor: ["rgba(255,255,255,1)", "#fa0", "rgba(255,255,255,1)"] }} 
                  transition={{ repeatType: "mirror", duration: 4, repeatDelay: 6, repeat: Infinity, delay:6 }}
                  className='font-extrabold gradient-text'>
                  Partner
                </motion.h2>
            </div>
        </div>
    </div>
  )
}
