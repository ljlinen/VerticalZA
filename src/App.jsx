import TopBar from './components/TopBar.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustStrip from './components/TrustStrip.jsx';
import Fleet from './components/Fleet.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import CallToAction from './components/CallToAction.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import DemoBadge from './components/DemoBadge.jsx';

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Fleet />
        <About />
        <Services />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <DemoBadge />
    </>
  );
}
