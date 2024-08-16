import styles from './AboutMeStyles.module.css';
import aboutpic from '../../assets/Photo 2024-08-06, 10 05 46 PM.jpg';
import CV from '../../assets/Sample-CV.pdf'
import { motion } from "framer-motion";
import Skills from '../../Skills/Skills';
import { HashLink as Link } from 'react-router-hash-link';
import { useInView } from 'react-intersection-observer';



function AboutMe() {
  const { ref: h1Ref, inView: h1InView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: pRef, inView: pInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id='AboutMe' className={styles.container}>
      <motion.h1 
        ref={h1Ref}
        initial={{ opacity: 0, y: 50 }} 
        animate={h1InView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}  >
        About Me
      </motion.h1>
      <div className={styles.info}>
        <motion.img 
          ref={imgRef}
          initial={{ opacity: 0, x: -50 }} 
          animate={imgInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0 }}  
          src={aboutpic} 
          className={styles.img} 
          style={{ willChange: 'transform, opacity' }} 
          loading="lazy"/>
        <div className={styles.PandRes}>
          <motion.p 
            ref={pRef}
            initial={{ opacity: 0, x: 50 }} 
            animate={pInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0 }}  >
            An aspiring web developer and software engineer from Sabaragamuwa University of Sri Lanka.
            Passionate about creating impactful digital solutions, I thrive on innovation and collaboration.
            I am eager to bring my skills and creativity to the tech industry.
          </motion.p>
          <motion.div className={styles.cont} style={{ willChange: 'transform, opacity' }} transition={{ delay: 0}} >
            <a href={CV} download>
              <button className={styles.resume}>Resume</button>
            </a>
            <Link to="#contact" smooth className={styles.hireme}>Hire Me</Link>
          </motion.div>
        </div>
      </div>
      <Skills />
    </section>
  );
}

export default AboutMe;
