import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Akü Bakım Servisi",
    description:
      "Traksiyoner akümülatörlerden daha fazla verim alınabilmesi için bakımlarının aksatılmadan yapılması gerekmektedir.",
    href: "/hizmetlerimiz/aku-bakim-servisi",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Akü Yenileme",
    description:
      "Verimliliği düşük traksiyoner akülerin yenilenmesi, performans ve ömür açısından son derece önemlidir.",
    href: "/hizmetlerimiz/aku-yenileme",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Akü Bakım Talimatı",
    description:
      "Akünün içindeki elektrolit sülfürik asit içerdiğinden, doğru kullanım talimatlarına uymak güvenliğiniz için kritiktir.",
    href: "/hizmetlerimiz/aku-bakim-talimati",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Traksiyoner Akü",
    description:
      "Elektrikli iş makinelerinin güç kalbi olan traksiyoner aküler; derin deşarja dayanıklı ve uzun ömürlüdür.",
    href: "/hizmetlerimiz/traksiyoner-aku",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Ölçü Listesi",
    description:
      "Aracınıza uygun akü boyutunu bulmak için kapsamlı ölçü listelerimizden yararlanın.",
    href: "/hizmetlerimiz/olcu-listesi",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-tertiary relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Ne Yapıyoruz
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-4">
            Hizmet Verdiğimiz Alanlar
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Tüm marka ve model akülere profesyonel bakım, onarım ve yenileme hizmeti sunuyoruz.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <Link
              to={service.href}
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-400 hover:-translate-y-1 flex flex-col"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-primary rounded-t-2xl transition-all duration-500"></div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-secondary flex items-center justify-center mb-6 transition-all duration-300 shadow-sm">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed flex-grow text-sm">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Detaylı Bilgi
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
