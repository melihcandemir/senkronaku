import akuKapagi from '../assets/akuKapagi.jpg';
import akuKazani from '../assets/akuKazani.png';
import akuSoketleri from '../assets/akuSoketleri.jpg';
import akuKablolari from '../assets/akuKablolari.png';
import kutu from '../assets/kutu.jpg';
import starterAku from '../assets/starterAku.png';
import civatalar from '../assets/civatalar.jpg';
import safSu from '../assets/safSu.jpg';

const ProductsPageCards = () => {
  // Kullanıcı ürünlerini ve fotoğraflarını buraya ekleyecek.
  // "image" kısmına import edilen fotoğraf yolu veya doğrudan link eklenebilir.
  const products = [
    {
      id: 1,
      name: "Akü Kapağı",
      description: "",
      image: akuKapagi, 
    },
    {
      id: 2,
      name: "Akü Kazanı",
      description: "",
      image: akuKazani,
    },
    {
      id: 3,
      name: "Akü Soketleri",
      description: "",
      image: akuSoketleri,
    },
    {
      id: 4,
      name: "Akü Kabloları",
      description: "Malzeme: Yüksek kaliteli, asit geçirmez esnek “Forprene” kaplamalı bakır kablo.\nModeller: DIN ve BS tip traksiyoner akü hücreleri için uygundur.\nBoyutlar: 25, 35, 50, 70, 95mm çapında mevcuttur.\nUzunluk: 75mm den 210mm ye kadar",
      image: akuKablolari,
    },
    {
      id: 5,
      name: "Akü Kutusu",
      description: "",
      image: kutu,
    },
    {
      id: 6,
      name: "Starter Akü",
      description: "Motorlu Taşıtlar üzerinde; marş motoru, ateşleme sistemi, aydınlatma sistemi ve tüm alıcıların çalışabilmesi için gereken enerjiyi sağlayan bir elektrik üretecidir. Taşıtlar çalışırken motordan hareket alan şarj sistemi, alıcıları beslese de motor durduğu zaman bazı gereksinimleri için elektrik enerjisine ihtiyaç duyar.",
      image: starterAku,
    }, {
      id: 7,
      name: "Civatalar",
      description: "Boyutlar: M10x22mm\nMalzeme: 45Nm’lik tork değeri ile özel yüksek mukavemetli plastik kafalı hafif çelik civata.\nKaplama: Çinko kaplama.",
      image: civatalar,
    }, {
      id: 8,
      name: "Saf Su",
      description: "Uzay, savunma, otomotiv, ilaç, kimya, tekstil ve gıda sanayi sektörlerinde imalat sektöründe arge ve kalite kontrol labaratuvarlarında, tıp labaratuvarlarında, hastane ve kliniklerde kullanılan iletkenliği 0,01us/cm ile 0,10 us/cm arasında değişen içindeki minarellerden ve organik maddelerden uzaklaştırılmış uv filtrelerinden geçirilmiş sudur.",
      image: safSu,
    }
  ];

  return (
    <section className="py-12 bg-tertiary">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
            >
              {/* Resim Alanı */}
              <div className="relative h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex justify-center items-center h-full w-full bg-secondary/5">
                    <span className="text-secondary/40 font-medium">Fotoğraf Alanı</span>
                  </div>
                )}
                {/* Turuncu Vurgu Çizgisi */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              </div>

              {/* İçerik Alanı */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-secondary mb-3 text-center">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-center whitespace-pre-line">
                  {product.description}
                </p>




              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPageCards;
