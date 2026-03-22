import { Container } from 'react-bootstrap'
import { Header } from './views/header/Header'
import { About } from './views/about/About'
import { Specialization } from './views/specialization/Specialization'
import './App.css'

function App() {
  return (
    <Container>
      <Header />
      <About />
      <Specialization />
    </Container>
  );
}

export default App
