import { Container } from 'react-bootstrap'
import { Header } from './views/header/Header'
import { About } from './views/about/About'
import { Specialization } from './views/specialization/Specialization'
import { Project } from './views/project/Project'
import { Tool } from './views/tool/Tool'
import { Contact } from './views/contact/Contact'
import { Navigation } from './views/navigation/Navigation'
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <div id="home"><Header /></div>
        <div id="about"><About /></div>
        <div id="specialization"><Specialization /></div>
        <div id="tool"><Tool /></div>
        <div id="project"><Project /></div>
        <div id="contact"><Contact /></div>
      </Container>
    </>
  );
}

export default App
