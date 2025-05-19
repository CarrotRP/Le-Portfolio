import Navbar from "./Component/Navbar"
import Home from "./Content/Home"
import Footer from "./Component/Footer"
import About from "./Content/About"
import Work from "./Content/Work"
import Contact from "./Content/Contact"
import ScrollTop from "./Component/ScrollTop"

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
    <Router basename={`/${import.meta.env.BASE_URL}`}>
      <Navbar isDark={isDark} toggleMode={toggleMode} />
      <Routes>
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
