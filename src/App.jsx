import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/Theme";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { Project } from "./Components/Projects/Project";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Header />
      </section>
      <main>
        <About />
        <section id="#projects">
          <Project />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}