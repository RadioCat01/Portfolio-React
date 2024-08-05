import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import viberr from '../../assets/viberr.png';
import hipster from '../../assets/hipsster.png';
import fitlife from '../../assets/fitlift.png';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className={styles.sectionTitle}>Projects</h1>
        <div className={styles.projectContainer}>
            <ProjectCard src={viberr} link={''} h3={'Viber'} p={'Streaming App'}/>
            <ProjectCard src={hipster} link={''} h3={'Hipster'} p={'Something App'}/>
            <ProjectCard src={fitlife} link={''} h3={'FitLife'} p={'Fitness App'}/>
        </div>
    </section>
  );
}

export default Projects
