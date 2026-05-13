import React from "react";
import { Link } from "react-router-dom";
import forkliftImg from "../assets/forklift.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${forkliftImg})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40"></div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Sakarya'nın Güvenilir Akü Servisi
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-tertiary leading-tight mb-6">
            Forklift Aküleriniz
            <span className="block text-primary mt-1">
              Uzman Ellerde
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
            Traksiyoner akü bakım, tamir ve yenileme hizmetlerimizle
            işletmenizin verimliliğini artırın. 10+ yıllık deneyimle
            yanınızdayız.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-yellow-500 text-secondary font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hemen Arayın
            </Link>
            <Link
              to="/hizmetlerimiz/aku-bakim-servisi"
              className="inline-flex items-center justify-center gap-2 bg-tertiary/10 hover:bg-tertiary/20 text-tertiary font-semibold text-base px-8 py-4 rounded-xl border border-tertiary/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Hizmetlerimiz
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Quick stats below CTA */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: "10+", label: "Yıl Deneyim" },
              { value: "500+", label: "Müşteri" },
              { value: "7/24", label: "Destek" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-px h-10 bg-primary/50"></div>
                <div>
                  <div className="text-2xl font-extrabold text-primary">{s.value}</div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <div className="w-6 h-10 border-2 border-tertiary/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
