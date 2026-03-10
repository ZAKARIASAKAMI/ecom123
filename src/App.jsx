
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./section/Home";
import About from "./section/AboutUs"
import Contact from "./section/Contact";
export default function App() {
  return (
    <> 
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
