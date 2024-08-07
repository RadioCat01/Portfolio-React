import { motion } from "framer-motion";
import styles from './BlogCardStyles.module.css';



function BlogCard({src, link , h3, p}) {
  return (
    <motion.a whileInView={{opacity:1, y:0}} initial={{opacity: 0, y:100}} transition={{duration:0.5}} href={link} className={styles.container}>
    <img className={styles.img} src={src} />
    <p className={styles.p}>{p}</p>
    <p className={styles.topic}>{h3}</p>
    </motion.a>
  )
}

export default BlogCard
