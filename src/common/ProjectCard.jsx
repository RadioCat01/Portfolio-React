import { motion } from "framer-motion";
import styles from './ProjectStyles.module.css';


function ProjectCard({ src, link , h3,p }) {
  return (
    <motion.a className={styles.container} whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:-100}} transition={{ delay: 0.5 }}  href={link} target='_blank'>
    <img className={styles.img} src={src} />
    <h3>{h3}</h3>
    <p className={styles.p}>{p}</p>
</motion.a>
  )
}

export default ProjectCard
