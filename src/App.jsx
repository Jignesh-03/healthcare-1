import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmergencyBar from './components/EmergencyBar';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <Router>
      <EmergencyBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
