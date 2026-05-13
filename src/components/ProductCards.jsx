import React from "react";
import { Link } from "react-router-dom";
import akuHucreleriImg from "../assets/akühucreleri.jpg";
import akumulatorImg from "../assets/akümülatör.jpg";
import boruImg from "../assets/boru.jpg";
import fisImg from "../assets/fis.jpg";
import hucreImg from "../assets/hucre.jpg";
import kabloImg from "../assets/kablo.png";

const products = [
  { title: "Akümülatör Hücreleri", image: akuHucreleriImg, href: "/urunlerimiz" },
  { title: "Traksiyoner Akümülatör", image: akumulatorImg, href: "/urunlerimiz" },
  { title: "Boru Bağlantıları", image: boruImg, href: "/urunlerimiz" },
  { title: "Akü Fişleri", image: fisImg, href: "/urunlerimiz" },
  { title: "Akü Hücresi", image: hucreImg, href: "/urunlerimiz" },
  { title: "Akü Kabloları", image: kabloImg, href: "/urunlerimiz" },
];

const ProductCards = () => {
  return (
    <section className="py-20 md:py-28 bg-tertiary relative">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Katalog
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-4">
            Ürünlerimiz & Yedek Parçalar
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Tüm akümülatör aksesuar ve yedek parçalarına sahipiz.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link
              to={product.href}
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-400 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden bg-gray-50 relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/30 transition-all duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary text-secondary font-bold text-sm px-4 py-2 rounded-full">
                      İncele →
                    </div>
                  </div>
                </div>
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></div>
              </div>

              {/* Title */}
              <div className="p-5 bg-white border-t border-gray-50">
                <h3 className="font-bold text-secondary text-base text-center group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Link
            to="/urunlerimiz"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-tertiary font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-300 hover:scale-105"
          >
            Tüm Ürünleri Gör
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
