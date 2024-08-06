import { motion } from "framer-motion";
import styles from "./SkillListStyles.module.css";

function SkillsList({src}) {
  return (
    <span>
    <motion.img whileInView={{opacity:1, y:0}} initial={{opacity: 0, y:-100}} transition={{duration:0.5}} src={src} className={styles.img} alt='checkMark'/>
    </span>
  )
}

export default SkillsList
