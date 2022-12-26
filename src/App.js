import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import About from "./components/About/about";
import Portofolio from './components/Portofolio/portofolio'
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About/>
        <Portofolio />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
