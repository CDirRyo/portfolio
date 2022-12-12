import './App.css'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Portfolio />
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
