import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const About = () => <h2>About</h2>
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
