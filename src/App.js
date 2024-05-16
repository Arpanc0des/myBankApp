import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Deposit from './pages/Deposit';
import Home from './pages/Home';
import Withdraw from './pages/Withdraw';
import KeyBtns from './pages/KeyBtns';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <img src='/image.png'/>
          <h1>Welcome To Your Bank</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/withdraw">Withdraw</Link></li>
            <li><Link to="/deposit">Deposit</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/deposit" element={<Deposit />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
