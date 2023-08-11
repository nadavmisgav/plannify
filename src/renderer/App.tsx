import Footer from 'components/Footer';
import Header from 'components/Header';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Project from './Project';

export default function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
