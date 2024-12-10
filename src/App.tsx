import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Reservations } from './pages/Reservations';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

function App() {
  return (
      <Router>
        <div className="min-h-screen flex flex-col">

          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;