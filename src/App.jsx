import './App.css'
import Header from "./Component/Header/Header.jsx"
import Home from "./Component/Home/Home.jsx"
import About from './Component/About/About.jsx'
import Skill from './Component/Skill/Skill.jsx'
import Qualification from './Component/Qualification/Qualification.jsx';
import Portfolio from './Component/Project/Portfolio.jsx'
import Contact from './Component/Contact/Contact.jsx';
import Footer from './Component/Footer/Footer.jsx'

function App() {

  return (
    <>
      <Header/>

      <main className='main'>
        <Home/>
        <About/>
        <Skill/>
        <Qualification/>
        <Portfolio/>
        <Contact/>
        {/* <Footer/> */}
        
      </main>
    </>
  )
}

export default App
