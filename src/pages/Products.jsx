import React from "react";
import { Link } from "react-router-dom";
import forkliftImg from "../assets/forklift.jpg";
import PageHero from "../components/PageHero";
import ProductsPageCards from "../components/ProductsPageCards";

const Products = () => {
  return (
    <div className="w-full bg-tertiary flex flex-col min-h-screen">
      <PageHero
        badge="Katalog"
        title="Ürünlerimiz"
        subtitle="Senkron Akü olarak en kaliteli ve dayanıklı ürünleri sizlere sunmaktan gurur duyuyoruz."
      />
      <ProductsPageCards />

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-secondary text-tertiary rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-3">
              İhtiyacınız Olan Ürün Burada Yok mu?
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Geniş ürün yelpazemiz hakkında bilgi almak için bize ulaşın.
            </p>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 bg-primary hover:bg-yellow-500 text-secondary font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
