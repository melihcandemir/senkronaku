import React from "react";
import olcuListesiImg from "../assets/olcuListesi.png";
import PageHero from "../components/PageHero";

const OlcuListesi = () => {
  return (
    <div className="bg-tertiary w-full">
      <PageHero
        badge="Referans"
        title="Akü Ölçü Listesi"
        subtitle="Aracınıza uygun akü boyutunu bulmak için kapsamlı ölçü listemizi inceleyin."
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
        {/* Info bar */}
        <div className="bg-secondary text-tertiary rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="text-4xl">📏</div>
          <div>
            <h3 className="font-bold text-primary text-lg mb-1">Ölçü Listesi Hakkında</h3>
            <p className="text-gray-300 text-sm">
              Aşağıdaki listede forklift ve elektrikli iş makinelerine uygun traksiyoner akü ölçülerini bulabilirsiniz.
              Uygun ölçüyü bulamazsanız bizimle iletişime geçin.
            </p>
          </div>
        </div>

        {/* Full Image */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30">
          <img
            src={olcuListesiImg}
            alt="Akü Ölçü Listesi"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OlcuListesi;
