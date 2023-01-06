import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import About from "./components/About/about";
import Portofolio from './components/Portofolio/portofolio'
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Sertifikat from "./components/Sertifikat/CardList/CardList";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About/>
        <Experience />
        <Sertifikat />
        <Portofolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
