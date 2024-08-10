import styles from './HeroStyles.module.css';
import profilePic from '../../assets/Photo 2024-05-27, 6 01 49 PM.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import LinkedinLight from '../../assets/linkedin-light.svg';
import LinkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import { useTypewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const [text] = useTypewriter ({
        words:["FullStack DEV", "UNDERGRADUATE", "SRI LANKA"],
        loop: true,
        typeSpeed:20,
        deleteSpeed: 10,
        delaySpeed: 4000,
    });

    const themeIcon = theme === 'light' ? sun : moon;
    const twitter = theme === 'light' ? twitterLight : twitterDark;
    const linkedin = theme === 'light' ? LinkedinLight : LinkedinDark;
    const github = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
        <motion.div initial={{x:-100, opacity:0}} animate={{ x: 0, opacity: 1}} className={styles.colorModeContainer}>
            <img src={profilePic} alt='profPic' className={styles.hero}/>
            <img onClick={toggleTheme} src={themeIcon} alt='Light-Dark' className={styles.colorMode}/>
        </motion.div>
        <motion.div initial={{x:100, opacity:0}} animate={{ x: 0, opacity: 1}} className={styles.info}>
            <h1 className={styles.im}>I'm</h1>
            <h1>Pawan<br/> Hettiarachchi</h1>
            <h2 className={styles.typeWriterh2}>{text}</h2>
            <span>
                <a href='https://x.com/Pawan38257022' target='_blank'>
                    <img src={twitter} alt='Twitter icon'/>
                </a>
                <a href='https://github.com/RadioCat01' target='_blank'>
                    <img src={github} alt='Github icon'/>
                </a>
                <a href='https://www.linkedin.com/in/pawan-kanishka-86b438249/' target='_blank'>
                    <img src={linkedin} alt='Ln icon'/>
                </a>
            </span>
            <HashLink to="#AboutMe" smooth className={styles.HashLink}>About Me</HashLink>
        </motion.div>
    </section>
  )
}

export default Hero
