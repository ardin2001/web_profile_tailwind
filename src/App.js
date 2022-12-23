import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import About from "./components/About/about";
import Portofolio from './components/Portofolio/portofolio'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About/>
        <Portofolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
