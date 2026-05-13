import React from "react";
import { Link } from "react-router-dom";
import forkliftImg from "../assets/forklift.jpg";
import akuKazaniImg from "../assets/akuKazani.png";

const milestones = [
  { year: "10+", label: "Yıllık Deneyim" },
  { year: "500+", label: "Memnun Müşteri" },
  { year: "1000+", label: "Bakım Yapılan Akü" },
  { year: "7/24", label: "Teknik Destek" },
];

const values = [
  {
    emoji: "🎯",
    title: "Uzman Kadro",
    desc: "Alanında uzman ve çağın gerektirdiği teknolojik altyapıya sahip personelimiz ile hizmet veriyoruz.",
  },
  {
    emoji: "💎",
    title: "Kaliteden Taviz Yok",
    desc: "Koşulsuz müşteri memnuniyeti ilkesi ve toplam kalite yönetimi anlayışı ile hizmet sunuyoruz.",
  },
  {
    emoji: "💰",
    title: "Uygun Fiyatlandırma",
    desc: "Uygun ödeme seçenekleri ve ekonomik fiyatlandırma ile kaliteyi sizlere sunmaktayız.",
  },
  {
    emoji: "♻️",
    title: "Sürdürülebilirlik",
    desc: "Sürdürülebilir bir ekonomi ve çevre için akülerin bakım ve onarım işlerini özenle gerçekleştiriyoruz.",
  },
];

const About = () => {
  return (
    <div className="flex-grow bg-tertiary">
      {/* Hero */}
      <div className="relative bg-secondary text-tertiary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={forkliftImg} alt="Senkron Akü" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60"></div>
        </div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#f7a707 1px, transparent 1px), linear-gradient(90deg, #f7a707 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Biz Kimiz
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
              Hakkımızda
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Senkron Akü: Güç, Enerji ve Güven ile 10+ yıldır Sakarya'da hizmet veriyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {milestones.map((m, i) => (
              <div key={i} className="group">
                <div className="text-3xl md:text-4xl font-extrabold text-secondary mb-1 group-hover:scale-110 transition-transform duration-300">{m.year}</div>
                <div className="text-secondary/80 font-semibold text-sm uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest">
              <span className="w-8 h-px bg-primary"></span>
              Şirket Hikayemiz
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Güvenilir Akü <span className="text-primary">Çözümleri</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Senkron Akü, marka ve model farketmeksizin; Traksiyoner Aküler,
              Starter Aküler ve Stasyoner Akülerin{" "}
              <span className="text-primary font-semibold">
                Bakım, Yenileme, Servis ve Satış Hizmetlerini
              </span>{" "}
              alanında uzman ve çağın gerektirdiği teknolojik alt yapıya sahip
              personeli ile kaliteden ödün vermeden yapmaktadır.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Firmamız, sürdürülebilir bir ekonomi ve çevre için akülerinizin
              bakım, servis ve onarım işlerini alanında uzman personeli ile
              yapmaktadır. Koşulsuz müşteri memnuniyeti ilkesi ve toplam kalite
              yönetimi anlayışı ile hizmet veren firmamız, uygun ödeme
              seçenekleri ve ekonomik fiyatlandırma ile kaliteyi sizlere
              sunmaktadır.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-2 bg-primary hover:bg-yellow-500 text-secondary font-bold px-6 py-3 rounded-xl shadow-md shadow-primary/20 transition-all duration-300 hover:scale-105"
              >
                İletişime Geçin
              </Link>
              <Link
                to="/hizmetlerimiz/aku-bakim-servisi"
                className="inline-flex items-center gap-2 bg-secondary text-tertiary font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
              <img
                src={akuKazaniImg}
                alt="Senkron Akü Hizmet"
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary text-tertiary font-bold px-5 py-3 rounded-2xl shadow-lg">
              ✓ Sakarya'nın Güvenilir Servisi
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">Değerlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">Neden Senkron Akü?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="text-4xl mb-4">{v.emoji}</div>
                <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-secondary text-tertiary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary rounded-full opacity-10 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-primary mb-4">Bizimle Çalışmaya Başlayın</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Aküleriniz için en iyi hizmeti almak üzere bugün bize ulaşın.
            </p>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 bg-primary hover:bg-yellow-500 text-secondary font-bold text-base px-10 py-4 rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
