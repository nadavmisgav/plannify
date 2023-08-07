import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.scss';

function Hello() {
  return (
    <div />
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
