import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import About from "./components/About/about";
import Portofolio from './components/Portofolio/portofolio'
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About/>
        <Experience />
        <Portofolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
