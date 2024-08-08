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
      transition={{ duration: 0.5 }} 
      href={link} 
      className={styles.container}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate only if inView
    >
      <motion.img 
        className={styles.img} 
        src={src} 
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }} 
        loading="lazy"
      />
      <motion.p 
        className={styles.p} 
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        {p}
      </motion.p>
      <motion.p 
        className={styles.topic} 
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 0.5 }}
      >
        {h3}
      </motion.p>
    </motion.a>
  );
}

export default BlogCard;
