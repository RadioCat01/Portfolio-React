import { motion } from "framer-motion";
import styles from './BlogStyles.module.css';
import springJpa from '../../assets/pngegg.png';
import springRe from '../../assets/spring_webflux_logo.png';
import springBoot from '../../assets/spring-boot.svg'
import BlogCard from "../../common/BlogCard";


function Blogs() {
  return (
    <section id="projects" className={styles.container}>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity: 0, y:50}} transition={{duration:0.5}} className={styles.sectionTitle}>Blogs</motion.h1>
        <div className={styles.projectContainer}>
            <BlogCard src={springJpa} link={'https://radiocatwrites.hashnode.dev/what-is-infinite-recursive-loop-in-spring-boot-everything-you-need-to-know'} h3={'Spring Boot'} p={'What is infinite recursion problem in Spring data JPA?'} />
            <BlogCard src={springBoot} link={'https://radiocatwrites.hashnode.dev/spring-boot-dependency-injection-through-the-lens-of-solid-principles'} h3={'Spring'} p={'Dependency injection explained with SOLID principles'}/>
            <BlogCard src={springRe} link={'https://radiocatwrites.hashnode.dev/spring-boot-dependency-injection-through-the-lens-of-solid-principles'} h3={'Spring Reactive'} p={'What is Spring WebFlux. Everything you neet to know !'}/>
        </div>
    </section>
  )
}

export default Blogs
