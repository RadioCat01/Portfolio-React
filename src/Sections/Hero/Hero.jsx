import styles from './HeroStyles.module.css';
import profilePic from '../../assets/ProfilePic.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import LinkedinLight from '../../assets/linkedin-light.svg';
import LinkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/20APC4639_ADatabase_Assignment_01&02.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitter = theme === 'light' ? twitterLight : twitterDark;
    const linkedin = theme === 'light' ? LinkedinLight : LinkedinDark;
    const github = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img src={profilePic} alt='profPic' className={styles.hero}/>
            <img onClick={toggleTheme} src={themeIcon} alt='Light-Dark' className={styles.colorMode}/>
        </div>
        <div className={styles.info}>
            <h1>Pawan<br/> Hettiarachchi</h1>
            <h2>Frontend Dev</h2>
            <span>
                <a href='' target='_blank'>
                    <img src={twitter} alt='Twitter icon'/>
                </a>
                <a href='' target='_blank'>
                    <img src={github} alt='Twitter icon'/>
                </a>
                <a href='' target='_blank'>
                    <img src={linkedin} alt='Twitter icon'/>
                </a>
            </span>
            <p className={styles.description}>With a passion for developing modern react apps for commercial businesses.</p>
            <a href={CV} download>
                <button className='hover' >Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero
