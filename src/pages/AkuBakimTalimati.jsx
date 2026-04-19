import React from 'react';
import akuBakimTalimatiImg from '../assets/akuBakimTalimati.jpg';

const AkuBakimTalimati = () => {
  return (
    <div className="bg-tertiary w-full">
      {/* Başlık */}
      <div className="py-10 md:py-14 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary tracking-wider uppercase leading-tight">
          Traksiyoner Akü
          <span className="block text-secondary mt-1">İşletme ve Bakım Talimatları</span>
        </h1>
        <div className="mt-4 flex justify-center">
          <span className="block w-24 h-1 bg-primary rounded-full"></span>
        </div>
      </div>

      {/* Tam Genişlik Fotoğraf */}
      <div className="w-full px-2 sm:px-4 lg:px-8 pb-6">
        <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/40">
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
