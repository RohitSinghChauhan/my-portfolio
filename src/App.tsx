import Footer from "./components/footer/Footer";
import { AOSInit } from "./lib/aos-init";
import About from "./sections/About";
import Main from "./sections/Main";
import Navbar from "./sections/Navbar";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div className="app-wrapper">
      <AOSInit />

      <Navbar />
      <Main />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
};

export default App;
