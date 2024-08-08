import Hero from '../../Sections/Hero/Hero';
import Blogs from '../../Sections/Blogs/Blogs';
import Projects from '../../Sections/Projects/Projects';
import Contacts from '../../Sections/Contact/Contact';
import Footer from '../../Sections/Footer/Footer';
import Repos from '../../Sections/Repos/Repos';
import AboutMe from '../../Sections/AboutMeBand/AboutMe';

function HomePage() {
  return (
    <BrowserRouter>
    <Hero/>
    <Repos/>
    <Blogs/>
    <AboutMe/>
    <Contacts/>
    <Footer/>
    </BrowserRouter>
  )
}
import { BrowserRouter } from 'react-router-dom';

export default HomePage
