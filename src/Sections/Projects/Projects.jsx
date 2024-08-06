import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import viberr from '../../assets/viberr.png';
import hipster from '../../assets/hipsster.png';
import fitlife from '../../assets/fitlift.png';
import { motion } from "framer-motion"



function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity: 0, y:-100}} transition={{duration:0.5}} className={styles.sectionTitle}>Projects</motion.h1>
        <div className={styles.projectContainer}>
            <ProjectCard src={viberr} link={''} h3={'Viber'} p={'Streaming App'}/>
            <ProjectCard src={hipster} link={''} h3={'Hipster'} p={'Something App'}/>
            <ProjectCard src={fitlife} link={''} h3={'FitLife'} p={'Fitness App'}/>
        </div>
    </section>
  );
}

export default Projects
