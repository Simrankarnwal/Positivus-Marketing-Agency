import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from "./Components/Services";
import CTA from "./Components/CTA"
import CaseStudies from './Components/CaseStudies';
import WorkingProcess from './Components/WorkingProcess';
import Team from './Components/Team';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from "./Components/Footer"
function App() {
  return (
    <>
      <div className='font-primary overflow-hidden'>
        <Navbar />
        <Hero />
        <Services />
        <CTA/>
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
         </div>
    </>
  )
}

export default App
