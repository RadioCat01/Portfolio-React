import { motion } from "framer-motion"


function ProjectCard({ src, link , h3,p }) {
  return (
    <motion.a whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:-100}} transition={{duration:0.5}} href={link} target='_blank'>
    <img className='hover' src={src} />
    <h3>{h3}</h3>
    <p>{p}</p>
</motion.a>
  )
}

export default ProjectCard
