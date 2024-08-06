import { motion } from "framer-motion";
import styles from './BlogCardStyles.module.css';


function BlogCard({src, link , h3,p}) {
  return (
    <motion.a whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:-100}} transition={{duration:0.5}} href={link} target='_blank' className={styles.container}>
    <img className={styles.img} src={src} />
    <h3>{h3}</h3>
    <p className={styles.p}>{p}</p>
</motion.a>
  )
}

export default BlogCard
