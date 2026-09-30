import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Header />

      <main>
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
