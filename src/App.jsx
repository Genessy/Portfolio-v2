import Navbar from './components/sections/navbar/Navbar'
import Hero from './components/sections/hero/Hero'
import Projects from './components/sections/projects/Projects'
import Skills from './components/sections/skills/Skills'
import Contact from './components/sections/contact/Contact'
import Footer from './components/sections/footer/Footer'
import './styles/global.css'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Projects></Projects>
    <Skills></Skills>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App