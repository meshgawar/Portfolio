import './App.css'
import Header from "./Component/Header/Header.jsx"
import Home from "./Component/Home/Home.jsx"
import About from './Component/About/About.jsx'
import Skill from './Component/Skill/Skill.jsx'
import Qualification from './Component/Qualification/Qualification.jsx';

function App() {

  return (
    <>
      <Header/>

      <main className='main'>
        <Home/>
        <About/>
        <Skill/>
        <Qualification/>
      </main>
    </>
  )
}

export default App
