import React from "react";
import { Link } from "react-router-dom";
import forkliftImg from "../assets/forklift.jpg";
import akuHucreleriImg from "../assets/akühucreleri.jpg";
import PageHero from "../components/PageHero";

const uygulamaAlanlari = [
  { icon: "🏗️", alan: "Elektrikli iş makineleri (İstif, personel taşıyıcı, yükseltme araçları)" },
  { icon: "🧹", alan: "Yer temizleme makineleri" },
  { icon: "⛵", alan: "Tekneler" },
  { icon: "⛏️", alan: "Maden araçları" },
  { icon: "🚆", alan: "Demir yollarında kullanılan araçlar" },
  { icon: "⛳", alan: "Golf araçları" },
  { icon: "🚐", alan: "Karavanlar" },
  { icon: "⚡", alan: "Elektrik motoru ile çalışan mevcut ve yeni geliştirilen araçlar" },
];

const ozellikler = [
  {
    baslik: "Derin Deşarj",
    aciklama: "Derin deşarja dayanıklı yapısıyla uzun süreli ve güvenilir enerji sağlar.",
    emoji: "⚡",
  },
  {
    baslik: "Sağlam Yapı",
    aciklama: "Sarsıntı ve titreşime karşı yüksek dayanıklılıkla uzun yıllar sorunsuz çalışır.",
    emoji: "🛡️",
  },
  {
    baslik: "Çevre Dostu",
    aciklama: "Sıfır salınım sağlayarak sera gazı oluşumunu engeller, ses kirliliğini azaltır.",
    emoji: "🌱",
  },
  {
    baslik: "Yüksek Kapasite",
    aciklama: "Kalın ve dayanıklı plakalar sayesinde fazla şarj döngüsüne dayanıklıdır.",
    emoji: "🔋",
  },
];

const TraksiyonerAku = () => {
  return (
    <div className="bg-tertiary w-full">
      <PageHero
        badge="Hizmetlerimiz"
        title="Traksiyoner Aküler"
        subtitle="Elektrikli araçların güç kalbi — güvenilir, dayanıklı ve çevre dostu enerji çözümleri."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">

        {/* Ana Açıklama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest">
              <span className="w-8 h-px bg-primary"></span>
              Nedir?
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Traksiyoner Aküler <span className="text-primary">Nedir?</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Temel enerji kaynağı olarak elektrik enerjisi kullanan "elektriklendirilmiş" araçlarda
              sürekli ve düzenli bir enerji gereksinimi söz konusudur. Bu tip sistemlerde gerek
              duyulan düzenli ve uzun süreli enerjiyi sistemin ana kaynağı olan derin deşarja
              dayanıklı Traksiyoner aküler sağlamaktadır.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Kurşun asit teknolojili stasyoner akülere göre traksiyoner aküler yapıları gereği daha
              ağır ve hacimli akülerdir. Bu farklılık sayesinde daha sağlam, sarsıntı ve titreşime
              karşı daha dayanıklıdırlar. Traksiyoner akülerde kullanılan plakalar daha kalın ve dayanıklıdır.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
              <img
                src={forkliftImg}
                alt="Traksiyoner Akü Forklift"
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-secondary font-bold px-5 py-3 rounded-2xl shadow-lg shadow-primary/30">
              ✓ Uzun Ömürlü
            </div>
          </div>
        </div>

        {/* Özellik Kartları */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">Özellikler</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">Traksiyoner Akü Özellikleri</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ozellikler.map((o, i) => (
              <div key={i} className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="text-4xl mb-4">{o.emoji}</div>
                <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">{o.baslik}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{o.aciklama}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Çevre Dostu */}
        <div className="bg-secondary rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary rounded-full opacity-10 blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-primary"></span>
                Sürdürülebilirlik
              </div>
              <h2 className="text-3xl font-extrabold text-primary mb-6">Çevre Dostu Teknoloji</h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Küresel ısınmanın en büyük etkenlerinden sera gazı salınımı yapan içten yanmalı motorla
                çalışan araçlar yerlerini sıfır salınım sağlayan elektrik motorlu araçlara bırakıyorlar.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Ayrıca elektrik motorlu araçlar, içten yanmalı motor ile çalışan araçlara göre daha sessiz
                olmaları nedeniyle ses kirliliğinin de önemli oranda azalmasına katkıda bulunuyorlar.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
              <img
                src={akuHucreleriImg}
                alt="Çevre Dostu Akü Teknolojisi"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Uygulama Alanları */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">Kullanım</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">Uygulama Alanları</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {uygulamaAlanlari.map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <p className="text-gray-600 text-sm leading-relaxed">{item.alan}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 rounded-3xl" style={{ backgroundImage: "radial-gradient(circle, #000029 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mb-4">Traksiyoner Akü İhtiyacınız Var mı?</h2>
            <p className="text-secondary/80 text-lg mb-8 max-w-xl mx-auto">Uzman ekibimiz aracınıza en uygun akü çözümünü sunmak için hazır.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/iletisim" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-tertiary font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                İletişime Geçin
              </Link>
              <a href="tel:+905333233210" className="inline-flex items-center justify-center gap-2 bg-secondary/10 hover:bg-secondary/20 text-secondary font-bold text-base px-8 py-4 rounded-xl border-2 border-secondary/30 transition-all duration-300 hover:scale-105">
                Hemen Arayın
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraksiyonerAku;
