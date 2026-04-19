import React from 'react';
import forkliftImg from '../assets/forklift.jpg';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[60vh] min-h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${forkliftImg})` }}
      >
        <div className="absolute inset-0 bg-secondary/70"></div>
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tertiary mb-6 drop-shadow-md">
          Senkron Akü'ye Hoş Geldiniz
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Geleceğin enerjisi için doğru yerdesiniz. Akü satışı, bakımı, yenilenmesi ve 7/24 teknik servis hizmetlerimizle kesintisiz güç sağlıyoruz.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
