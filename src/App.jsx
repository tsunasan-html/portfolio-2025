import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Works from './component/Works';
import Home from './Home';
import Footer from './component/Footer'; 
import './App.css';

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (path) => {
    if (location.pathname === "/" && !isScrolled) {
      return "link-fff";
    }
    if (location.pathname === "/about/" || location.pathname === "/works/" || location.pathname === "/contact/") {
      return "link-gold"; 
    }
    return isScrolled ? "link-gold" : "link-fff"; 
  };

  return (
    <header className="header">
      <div className="header_inner">
        <ul className="header_inner_list">
          <li className="header_inner_listItem header_inner_listItem--home">
            <Link to="/" className={getLinkClass("/")}>HOME</Link>
          </li>
          <li className="header_inner_listItem header_inner_listItem--about">
            <Link to="/about/" className={getLinkClass("/about/")}>ABOUT</Link>
          </li>
          <li className="header_inner_listItem header_inner_listItem--works">
            <Link to="/works/" className={getLinkClass("/works/")}>WORKS</Link>
          </li>
          <li className="header_inner_listItem header_inner_listItem--contact">
            <Link to="/contact/" className={getLinkClass("/contact/")}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

function AppContent() {
  const location = useLocation(); 
  const isAboutPage = location.pathname === "/about/";
  const isWorksPage = location.pathname === "/works/";
  const isContactPage = location.pathname === "/contact/";

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/works/" element={<Works />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>

      {isAboutPage && <Footer />}
      {isWorksPage && <Footer />}
      {isContactPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
