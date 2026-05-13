import akuKapagi from "../assets/akuKapagi.jpg";
import akuKazani from "../assets/akuKazani.png";
import akuSoketleri from "../assets/akuSoketleri.jpg";
import akuKablolari from "../assets/akuKablolari.png";
import kutu from "../assets/kutu.jpg";
import starterAku from "../assets/starterAku.png";
import civatalar from "../assets/civatalar.jpg";
import safSu from "../assets/safSu.jpg";

const products = [
  {
    id: 1,
    name: "Akü Kapağı",
    description: "Traksiyoner akümülatörler için yüksek kaliteli, asit geçirmez akü kapakları.",
    image: akuKapagi,
    tag: "Aksesuar",
  },
  {
    id: 2,
    name: "Akü Kazanı",
    description: "Endüstriyel traksiyoner aküler için dayanıklı ve uzun ömürlü akü kazanları.",
    image: akuKazani,
    tag: "Ana Parça",
  },
  {
    id: 3,
    name: "Akü Soketleri",
    description: "Güvenli ve hızlı bağlantı için yüksek akım kapasiteli akü soketleri.",
    image: akuSoketleri,
    tag: "Bağlantı",
  },
  {
    id: 4,
    name: "Akü Kabloları",
    description:
      "Yüksek kaliteli, asit geçirmez esnek Forprene kaplamalı bakır kablo. 25-95mm çap, 75-210mm uzunluk seçenekleri.",
    image: akuKablolari,
    tag: "Kablo",
  },
  {
    id: 5,
    name: "Akü Kutusu",
    description: "Traksiyoner aküler için sağlam ve dayanıklı akü kutuları.",
    image: kutu,
    tag: "Kasa",
  },
  {
    id: 6,
    name: "Starter Akü",
    description:
      "Motorlu taşıtlarda marş motoru, ateşleme ve aydınlatma sistemi için gerekli enerjiyi sağlayan güçlü starter akümülatörler.",
    image: starterAku,
    tag: "Akü",
  },
  {
    id: 7,
    name: "Civatalar",
    description:
      "M10x22mm boyutunda, 45Nm tork değeri ile özel yüksek mukavemetli plastik kafalı çinko kaplama civata.",
    image: civatalar,
    tag: "Montaj",
  },
  {
    id: 8,
    name: "Saf Su",
    description:
      "İletkenliği 0,01-0,10 µS/cm arasında, minerallerden ve organik maddelerden arındırılmış, UV filtreli saf su.",
    image: safSu,
    tag: "Kimyasal",
  },
];

const ProductsPageCards = () => {
  return (
    <section className="py-12 bg-tertiary">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-400 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-gray-50">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex justify-center items-center h-full w-full bg-secondary/5">
                    <span className="text-secondary/40 font-medium">Fotoğraf Alanı</span>
                  </div>
                )}
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></div>
                {/* Tag badge */}
                <div className="absolute top-3 right-3 bg-secondary/80 text-primary text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                  {product.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
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
