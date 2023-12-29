
import About from './components/layout/About';
import ContactUs from './components/layout/ContactUs';
import Footer from './components/layout/Footer';
import Hero from './components/layout/Hero';
import HomeMenu from './components/layout/HomeMenu';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <About />
      <ContactUs />
      <Footer />
    </>
  )
}
