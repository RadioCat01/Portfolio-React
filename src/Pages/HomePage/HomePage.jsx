import Hero from '../../Sections/Hero/Hero';
import Blogs from '../../Sections/Blogs/Blogs';
import Contacts from '../../Sections/Contact/Contact';
import Footer from '../../Sections/Footer/Footer';
import Repos from '../../Sections/Repos/Repos';
import AboutMe from '../../Sections/AboutMeBand/AboutMe';
import styles from './homepageStyles.module.css';

function HomePage() {
  return (
    <BrowserRouter>
      <div className={styles.pagecontainer}>
          <Hero/>
          <Repos/>
          <Blogs/>
          <AboutMe/>
          <Contacts/>
          <Footer/>
      </div>
    </BrowserRouter>
  )
}
import { BrowserRouter } from 'react-router-dom';

export default HomePage
