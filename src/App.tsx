import Footer from "./components/footer/Footer";
import About from "./sections/About";
import Main from "./sections/Main";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
