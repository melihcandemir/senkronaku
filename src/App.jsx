import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import AkuBakimServisi from './pages/AkuBakimServisi';
import AkuYenileme from './pages/AkuYenileme';
import AkuBakimTalimati from './pages/AkuBakimTalimati';
import TraksiyonerAku from './pages/TraksiyonerAku';
import OlcuListesi from './pages/OlcuListesi';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-tertiary flex flex-col relative">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/urunlerimiz" element={<Products />} />
            <Route path="/hizmetlerimiz/aku-bakim-servisi" element={<AkuBakimServisi />} />
            <Route path="/hizmetlerimiz/aku-yenileme" element={<AkuYenileme />} />
            <Route path="/hizmetlerimiz/aku-bakim-talimati" element={<AkuBakimTalimati />} />
            <Route path="/hizmetlerimiz/traksiyoner-aku" element={<TraksiyonerAku />} />
            <Route path="/hizmetlerimiz/olcu-listesi" element={<OlcuListesi />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
