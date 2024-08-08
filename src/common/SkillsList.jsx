import { motion } from "framer-motion";
import styles from "./SkillListStyles.module.css";

function SkillsList({src}) {
  return (
    <span>
    <img  src={src} className={styles.img} alt='checkMark'/>
    </span>
  )
}

export default SkillsList
