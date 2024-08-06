import stryles from './AboutMeStyles.module.css';
import aboutpic from '../../assets/Photo 2024-08-06, 10 05 46 PM.jpg';
import CV from '../../assets/20APC4639_ADatabase_Assignment_01&02.pdf'
import { motion } from "framer-motion";
import Skills from '../../Skills/Skills';



function AboutMe() {
  return (
    <section id='AboutMe' className={stryles.container}>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity: 0, y:-100}} transition={{duration:0.5}}>About Me</motion.h1>
        <div className={stryles.info}>
        <motion.img whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:-100}} transition={{duration:0.5}} src={aboutpic} className={stryles.img}/>
        <div className={stryles.PandRes}>
        <motion.p whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:100}} transition={{duration:0.5}}>An aspiring web developer and software engineer from Sabaragamuwa University of Sri Lanka.
             Passionate about creating impactful digital solutions, I thrive on innovation and collaboration.
             I am eager to bring my skills and creativity to the tech industry.</motion.p>
        <motion.div whileInView={{opacity:1, y:0}} initial={{opacity: 0, y:-100}} transition={{duration:0.5}} className={stryles.cont}>
        <a href={CV} download >
                <button className={stryles.resume} >Resume</button></a>
                <button className={stryles.hireme} >Hire Me</button>
        </motion.div>
        </div>
        </div>
        <Skills/>
    </section>
  )
}

export default AboutMe
