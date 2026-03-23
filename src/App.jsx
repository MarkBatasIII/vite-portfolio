import { Container } from 'react-bootstrap'
import { Header } from './views/header/Header'
import { About } from './views/about/About'
import { Specialization } from './views/specialization/Specialization'
import { MyProject } from './views/my_project/MyProject'
import './App.css'

function App() {
  return (
    <Container>
      <Header />
      <About />
      <Specialization />
      <MyProject />
    </Container>
  );
}

export default App
