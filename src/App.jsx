import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import About from './component/About';
import Contact from './component/Contact';
import Home from './Home'
import './App.css'

function Header() {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <header className="header">
      <div className="header_inner">
        <ul className="header_inner_list">
        <li className="header_inner_listItem header_inner_listItem--about">
            <Link to="/" className={isHome ? "link-home" : "link-other"}>HOME</Link>
          </li>
          <li className="header_inner_listItem header_inner_listItem--about">
            <Link to="/about/" className={isHome ? "link-home" : "link-other"}>ABOUT</Link>
          </li>
          <li className="header_inner_listItem header_inner_listItem--works">
            <Link to="/works/" className={isHome ? "link-home" : "link-other"}>WORKS</Link>
          </li>
          <li className="header_inner_listItem header_inner_listItem--contact">
            <Link to="/contact/" className={isHome ? "link-home" : "link-other"}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/works/" element={<div>Works Page</div>} />
          <Route path="/contact/" element={<Contact/>} />
        </Routes>
      </>
    </Router>
  )
}

export default App
