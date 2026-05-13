import React from "react";
import akuBakimTalimatiImg from "../assets/akuBakimTalimati.jpg";
import PageHero from "../components/PageHero";

const AkuBakimTalimati = () => {
  return (
    <div className="bg-tertiary w-full">
      <PageHero
        badge="Hizmetlerimiz"
        title="Akü Bakım Talimatı"
        subtitle="Traksiyoner akü işletme ve bakım talimatlarını inceleyerek akülerinizi doğru kullanın."
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            { emoji: "⚠️", title: "Dikkat", desc: "Elektrolit sülfürik asit içerdiğinden el ve göz temasından kaçının." },
            { emoji: "💧", title: "Saf Su", desc: "Akü bakımında yalnızca saf su kullanın, musluk suyu kullanmayın." },
            { emoji: "🔌", title: "Şarj", desc: "Şarj işlemi sırasında kapalı mekanda yeterli havalandırma sağlayın." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center">
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="font-bold text-secondary text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Full Image */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30">
          <img
            src={akuBakimTalimatiImg}
            alt="Traksiyoner Akü İşletme ve Bakım Talimatları"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AkuBakimTalimati;
