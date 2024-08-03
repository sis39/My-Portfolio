import { RiReactjsLine } from "react-icons/ri";
import { FaSalesforce } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { motion } from "framer-motion";
const iconVariant = (duration)=>({
    initial:{y:-10},
    animate:{
      y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies </motion.h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <RiReactjsLine className="text-7xl text-cyan-400"/>
          </motion.div>
          <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaSalesforce className="text-7xl text-sky-400"/>
          </motion.div>
          <motion.div 
          variants={iconVariant(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaDatabase className="text-7xl text-orange-500"/>
          </motion.div>
          <motion.div
          variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaJava className="text-7xl text-green-400"/>
          </motion.div>
          <motion.div
          variants={iconVariant(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <TbBrandJavascript className="text-7xl text-yellow-400"/>
          </motion.div>
          <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-slate-400">
              <SiFramer  className="text-7xl text-black  "/>
          </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
