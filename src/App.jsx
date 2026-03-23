import { Container } from 'react-bootstrap'
import { Header } from './views/header/Header'
import { About } from './views/about/About'
import { Specialization } from './views/specialization/Specialization'
import { Project } from './views/project/Project'
import { Tool } from './views/tool/Tool'
import './App.css'

function App() {
  return (
    <Container>
      <Header />
      <About />
      <Specialization />
      <Tool />
      <Project />
    </Container>
  );
}

export default App
