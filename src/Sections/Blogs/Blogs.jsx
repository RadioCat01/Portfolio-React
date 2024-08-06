import { motion } from "framer-motion";
import styles from './BlogStyles.module.css';
import springJpa from '../../assets/pngegg.png';
import springBoot from '../../assets/spring-boot.svg'
import BlogCard from "../../common/BlogCard";

function Blogs() {
  return (
    <section id="projects" className={styles.container}>
        <motion.h1 whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:-100}} transition={{duration:0.5}} className={styles.sectionTitle}>Blogs</motion.h1>
        <div className={styles.projectContainer}>
            <BlogCard src={springJpa} link={'https://radiocatwrites.hashnode.dev/what-is-infinite-recursive-loop-in-spring-boot-everything-you-need-to-know'} h3={'Spring Boot'} p={'Infinite Recursion loop in data jpa'} />
            <BlogCard src={springBoot} link={'https://radiocatwrites.hashnode.dev/spring-boot-dependency-injection-through-the-lens-of-solid-principles'} h3={'Spring Boot'} p={'Dependency injection and SOLID principles'}/>
        </div>
    </section>
  )
}

export default Blogs
