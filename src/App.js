import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import About from "./components/About/about";
import Portofolio from './components/Portofolio/portofolio'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About/>
        <Portofolio />
      </main>
    </>
  );
}

export default App;
