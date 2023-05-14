import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import UnscrambleForm from './unscrambleForm';

function App() {
  return (
    <div className="App">
      <Container >
        <UnscrambleForm />
      </Container>
    </div>
  );
}

export default App;
