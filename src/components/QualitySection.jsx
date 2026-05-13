import React from "react";
import { Clock, Zap, BatteryCharging, Shield } from "lucide-react";

const qualities = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: "7/24 Hizmet Anlayışı",
    description:
      "Bakım hizmeti süresince iş kayıplarının önüne geçmek için ikame akü seçeneğimiz ile yanınızdayız.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Profesyonel & Hızlı",
    description:
      "Profesyonel ekibimiz ile marka ve model farketmeksizin satış ve satış sonrası hizmetimizle yanınızdayız.",
  },
  {
    icon: <BatteryCharging className="w-7 h-7" />,
    title: "A'dan Z'ye Akü Çözümleri",
    description:
      "Traksiyoner, Starter ve Stasyoner akülerinize Bakım, Servis ve Yedek Parça hizmetimizle yanınızdayız.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Garantili Hizmet",
    description:
      "Yaptığımız tüm bakım ve tamir işlemlerine garanti veriyoruz. Kaliteden ödün vermeden hizmet sunuyoruz.",
  },
];

const QualitySection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary text-tertiary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/8 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#f7a707 1px, transparent 1px), linear-gradient(90deg, #f7a707 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Neden Biz?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Hizmet Kalitemiz
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Senkron Akü, marka ve model farketmeksizin; Traksiyoner Aküler,
            Starter Aküler ve Stasyoner Akülerin Bakım, Yenileme, Servis ve
            Satış Hizmetlerini alanında uzman personeli ile kaliteden ödün
            vermeden yapmaktadır.
          </p>
        </div>

        {/* Quality cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualities.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 hover:border-primary/40 rounded-2xl p-7 text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-400 hover:-translate-y-1"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-2xl bg-primary/15 group-hover:bg-primary text-primary group-hover:text-secondary flex items-center justify-center mx-auto mb-5 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="tel:+905333233210"
            className="inline-flex items-center gap-3 bg-primary hover:bg-yellow-500 text-secondary font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +90 533 323 32 10
          </a>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
