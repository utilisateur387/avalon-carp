import './App.scss';
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Domaine from "./components/Domaine";
import Galerie from "./components/Galerie";
import LanguageButtons from "./components/LanguageButtons";
import Offres from "./components/Offres";
import Reglement from "./components/Reglement";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <BrowserRouter>
      <Header scrollTop={scrollTop} />
      <LanguageButtons />
      {/* <Menu /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home scrollTop={scrollTop} />} />
          <Route path="/domaine" element={<Domaine scrollTo={scrollTop} />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/offres" element={<Offres />} />
          <Route path="/reglement" element={<Reglement />} />
          <Route path="/contact" element={<Contact scrollTop={scrollTop} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
