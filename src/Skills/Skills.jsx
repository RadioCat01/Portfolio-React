import styles from './SkillsStyles.module.css';
import SkillsList from '../common/SkillsList';
import angular from '../assets/Skills/icons8-angular-240.png';
import c from '../assets/Skills/icons8-c-48.png';
import java from '../assets/Skills/icons8-java-480.png';
import react from '../assets/Skills/icons8-react-native-480.png';
import spring from '../assets/Skills/icons8-spring-boot-480.png';
import typeS  from '../assets/Skills/icons8-typescript-480.png';
import springR  from '../assets/Skills/reactive-spring-boot.png';
import js  from '../assets/Skills/icons8-javascript-480.png';
import mongo  from '../assets/Skills/mongodb.svg';
import ps  from '../assets/Skills/pngwing.com.png';
import uni  from '../assets/Skills/unity.svg';
import hy  from '../assets/Skills/Hibernate.svg';



function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <div className={styles.skillList}>
           <SkillsList src={java} />
           <SkillsList src={c} />
           <SkillsList src={spring} />
           <SkillsList src={springR} />    
        </div>
        <hr/>
        <div className={styles.skillList}>
           <SkillsList src={react} />
           <SkillsList src={js} />
           <SkillsList src={angular} />
           <SkillsList src={typeS} />
           
        </div>
        <hr/>
        <div className={styles.skillList}>
           <SkillsList src={ps} />
           <SkillsList src={mongo} />
           <SkillsList src={hy} />
           <SkillsList src={uni} />
        </div>
        
    </section>
  );
}

export default Skills

