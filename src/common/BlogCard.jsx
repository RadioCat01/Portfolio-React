import { motion } from 'framer-motion';
import styles from './BlogCardStyles.module.css';
import { useInView } from 'react-intersection-observer';

function BlogCard({ src, link, h3, p }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust threshold as needed
  });

  return (
    <motion.a 
      ref={ref} 
      whileInView={{ opacity: 1, y: 0 }} 
      initial={{ opacity: 0, y: 50 }} 
      transition={{ delay: 0.2 }}  
      href={link} 
      className={styles.container}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}>
        
      <img className={styles.img} src={src} loading="lazy"/>
      <p className={styles.p}>{p}</p>
      <p className={styles.topic} >{h3}</p>
    </motion.a>
  );
}

export default BlogCard;
