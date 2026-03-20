import { Routes, Route } from 'react-router'
import { Cover } from './views/Cover'
import { Container } from 'react-bootstrap';
import './App.css'

function App() {
  return (
    <Container>
      <Routes>
        <Route index element={<Cover />} />
      </Routes>
    </Container>
  );
}

export default App
