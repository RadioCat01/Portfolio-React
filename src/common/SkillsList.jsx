import { motion } from "framer-motion"


function SkillsList({src, skill}) {
  return (
    <span>
    <motion.img whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:-100}} transition={{duration:0.5}} src={src} alt='checkMark'/>
    <motion.p whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:+100}} transition={{duration:0.5}}>{skill}</motion.p>
</span>
  )
}

export default SkillsList
