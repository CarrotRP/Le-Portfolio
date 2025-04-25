import Navbar from "./Navbar"
import Home from "./Home"
import Footer from "./Footer"
import About from "./About"
import Work from "./Work"
import Contact from "./Contact"
import ScrollTop from "./ScrollTop"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState, useEffect} from "react"

function App() {

  //use dark mode toggle stuff in here to pass the prop to footer, cuz idk other way
  const [isDark, setIsDark] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const toggleMode = () => {
    document.body.classList.toggle('darkmode')
    setIsDark(!isDark);
  }
  const handleClick = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.pageYOffset > 500);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Router>
      <Navbar isDark={isDark} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/works" element={<Work />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
      <ScrollTop showBtn={showBtn} handleClick={handleClick}/>
      <Footer isDark={isDark} />
    </Router>
  )
}

export default App
