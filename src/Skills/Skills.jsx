import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../assets/checkmark-dark.svg';
import checkMarkIconLight from '../assets/checkmark-light.svg';
import SkillsList from '../common/SkillsList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className={'sectionTitle'}>Skills</h1>
        <div className={styles.skillList}>
           <SkillsList src={checkMarkIconDark} skill={'HTML'}/>
           <SkillsList src={checkMarkIconDark} skill={'CSS'}/>
           <SkillsList src={checkMarkIconDark} skill={'JS'}/>
           <SkillsList src={checkMarkIconDark} skill={'Spring'}/>
           <SkillsList src={checkMarkIconDark} skill={'Angular'}/>
           <SkillsList src={checkMarkIconDark} skill={'C#'}/>
        </div>
        <hr/>
        <div className={styles.skillList}>
           <SkillsList src={checkMarkIconDark} skill={'HTML'}/>
           <SkillsList src={checkMarkIconDark} skill={'CSS'}/>
           <SkillsList src={checkMarkIconDark} skill={'JS'}/>
           <SkillsList src={checkMarkIconDark} skill={'Spring'}/>
           <SkillsList src={checkMarkIconDark} skill={'Angular'}/>
           <SkillsList src={checkMarkIconDark} skill={'C#'}/>
        </div>
        <hr/>
        <div className={styles.skillList}>
           <SkillsList src={checkMarkIconDark} skill={'HTML'}/>
           <SkillsList src={checkMarkIconDark} skill={'CSS'}/>
           <SkillsList src={checkMarkIconDark} skill={'JS'}/>
           <SkillsList src={checkMarkIconDark} skill={'Spring'}/>
           <SkillsList src={checkMarkIconDark} skill={'Angular'}/>
           <SkillsList src={checkMarkIconDark} skill={'C#'}/>
        </div>
    </section>
  );
}

export default Skills

