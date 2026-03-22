import { Container } from 'react-bootstrap'
import { Header } from './views/header/Header'
import { About } from './views/about/About'
import './App.css'

function App() {
  return (
    <Container>
      <Header />
      <About />
    </Container>
  );
}

export default App
