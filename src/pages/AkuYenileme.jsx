import React from "react";
import { Link } from "react-router-dom";
import akuYenilemeImg from "../assets/akuYenileme.jpg";
import akuHucreleriImg from "../assets/akühucreleri.jpg";
import PageHero from "../components/PageHero";

const advantages = [
  "Akümülatörün kullanım ömrünü uzatır.",
  "Akümülatörün performansını arttırır.",
  "Sülfat çözme işlemiyle şarj edilemeyen akümülatörlerin şarj edilmesi sağlanır.",
  "Yeniden şarjlama daha kısa sürede yapılır.",
  "Erken hücre bozulmaları engellenir.",
  "Çalışma vardiyaları arasında daha az akü değişikliği gerekir.",
  "Saf su tüketimini azaltır.",
  "Forklift elektrik ekipmanlarının ömrünü uzatır ve zarar görmesini engeller.",
  "İleride oluşabilecek arıza maliyetlerinin ve iş kaybının önüne geçilir.",
];

const steps = [
  { step: "01", title: "Tanılama", desc: "Akünüzün kapsamlı kapasitesi ve arıza analizi" },
  { step: "02", title: "Söküm & İnceleme", desc: "Hücre, plaka ve seperatör kontrolü" },
  { step: "03", title: "Yenileme", desc: "Bozulmuş parçaların değişimi ve sülfat çözme" },
  { step: "04", title: "Test & Teslim", desc: "Kapasite testi ve garantili teslim" },
];

const AkuYenileme = () => {
  return (
    <div className="bg-tertiary w-full">
      <PageHero
        badge="Hizmetlerimiz"
        title="Akü Yenileme"
        subtitle="Düşük verimli akülerinizi yenileyerek maksimum performansa ve kapasiteye yeniden ulaşın."
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">

        {/* Section 1: Ana bilgi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest">
              <span className="w-8 h-px bg-primary"></span>
              Yenileme Hizmeti
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Traksiyoner Akü{" "}
              <span className="text-primary">Yenileme</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Verimliliği düşük traksiyoner akülerin zaman içerisinde
              yenilenmesi performans anlamında son derece önemlidir.
              Traksiyoner akümülatörlerden daha fazla verim alınabilmesi için
              bakımlarının aksatılmadan yapılması gerekmektedir.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Akü bakım işlemi akünün kapasitesinin sürekliliği için önemli bir
              işlemdir. Düzenli bakımları yapılan akülerin kapasite ve
              verimlilikleri sürekli en üst düzeyde olur.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Akü tamirinde ise; akünün arızalı veya ekonomik ömrü dolmuş olan
              parçaları (hücre, plaka, seperatör vs.) değiştirilerek
              akümülatörün eski kapasitesine ulaşması sağlanır.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-2 bg-primary hover:bg-yellow-500 text-secondary font-bold px-6 py-3 rounded-xl shadow-md shadow-primary/20 transition-all duration-300 hover:scale-105"
              >
                Teklif Al
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
              <img
                src={akuYenilemeImg}
                alt="Akü Yenileme İşlemi"
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-secondary font-bold px-5 py-3 rounded-2xl shadow-lg shadow-primary/30">
              ✓ Uzman Teknisyenler
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Nasıl Çalışıyoruz?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
              Yenileme Süreci
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/30 z-10"></div>
                )}
                <div className="text-4xl font-extrabold text-primary/20 mb-4">{s.step}</div>
                <h3 className="text-lg font-bold text-secondary mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image + info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative lg:order-1">
            <div className="absolute -inset-4 bg-secondary/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
              <img
                src={akuHucreleriImg}
                alt="Akü Hücreleri Yenileme"
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary text-tertiary font-bold px-5 py-3 rounded-2xl shadow-lg">
              ✓ Garantili Yenileme
            </div>
          </div>

          <div className="space-y-6 lg:order-2">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest">
              <span className="w-8 h-px bg-primary"></span>
              Neden Yenileyin?
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Eski Kapasitenize{" "}
              <span className="text-primary">Kavuşun</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Zamanla düşen akü kapasitesi, iş makinelerinizin performansını
              olumsuz etkiler. Yenileme işlemi ile aküleriniz fabrika değerlerine
              ulaşır ve yeni akü maliyetinden çok daha uygun fiyatla yüksek
              verim elde edersiniz.
            </p>
            <ul className="space-y-3 pt-2">
              {["Yeni akü alımına kıyasla %60'a kadar tasarruf", "Orijinal kapasiteye kavuşma", "Çevre dostu geri dönüşüm", "Hızlı servis ve teslim"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Advantages */}
        <div className="bg-secondary text-tertiary rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary rounded-full opacity-10 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div
            className="absolute inset-0 opacity-[0.04] rounded-3xl"
            style={{
              backgroundImage:
                "linear-gradient(#f7a707 1px, transparent 1px), linear-gradient(90deg, #f7a707 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="relative z-10">
            <div className="text-center mb-10">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">Faydalar</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Yenilemenin Avantajları</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 rounded-xl p-4 transition-all duration-300">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">{advantage}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-2 bg-primary hover:bg-yellow-500 text-secondary font-bold text-base px-10 py-4 rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Teklif Alın
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkuYenileme;
