import { Container } from 'react-bootstrap'
import { Cover } from './views/Cover'
import { About } from './views/About'
import { Contact } from './views/Contact'
import './App.css'

function App() {
  return (
    <Container>
      <Cover />
      <About />
      <Contact />
    </Container>
  );
}

export default App
