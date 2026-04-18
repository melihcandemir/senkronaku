import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <Navbar />
      {/* Diğer sayfa içerikleri buraya gelecek */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
