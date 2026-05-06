import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Frameworks from './pages/Frameworks';
import About from './pages/About';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import Article from './pages/Article';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/frameworks" element={<Frameworks />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<Article />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
