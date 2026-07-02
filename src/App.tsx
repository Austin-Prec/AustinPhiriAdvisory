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
import AdminApp from './admin/AdminApp';

// Public pages share the site chrome (Navbar/Footer). The admin tool at
// /admin is a standalone screen with its own layout, so it's kept outside
// this wrapper rather than nested inside it.
function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route
          path="/*"
          element={
            <PublicLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/frameworks" element={<Frameworks />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<Article />} />
              </Routes>
            </PublicLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
