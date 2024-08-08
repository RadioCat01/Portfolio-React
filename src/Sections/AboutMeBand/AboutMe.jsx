import styles from './AboutMeStyles.module.css';
import aboutpic from '../../assets/Photo 2024-08-06, 10 05 46 PM.jpg';
import CV from '../../assets/20APC4639_ADatabase_Assignment_01&02.pdf'
import { motion } from "framer-motion";
import Skills from '../../Skills/Skills';
import { HashLink as Link } from 'react-router-hash-link';

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96]
};

function AboutMe() {
  return (
    <section id='AboutMe' className={styles.container}>
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: -100 }} 
          transition={transition}>
          About Me
        </motion.h1>
        <div className={styles.info}>
          <motion.img 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: -100 }} 
            transition={transition} 
            src={aboutpic} 
            className={styles.img} 
            style={{ willChange: 'transform, opacity' }} 
            loading="lazy"/>
          <div className={styles.PandRes}>
            <motion.p 
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: 100 }} 
              transition={transition}>
              An aspiring web developer and software engineer from Sabaragamuwa University of Sri Lanka.
              Passionate about creating impactful digital solutions, I thrive on innovation and collaboration.
              I am eager to bring my skills and creativity to the tech industry.
            </motion.p>
            <motion.div className={styles.cont} style={{ willChange: 'transform, opacity' }}>
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
