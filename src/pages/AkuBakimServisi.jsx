import React from 'react';
import { Link } from 'react-router-dom';

const AkuBakimServisi = () => {
  return (
    <div className="bg-tertiary w-full">
      {/* Hero Section */}
      <div className="bg-secondary text-tertiary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Akü Bakım Servisi</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Profesyonel bakım ve onarım hizmetlerimizle akülerinizi güvence altına alın, performanslarını zirvede tutun.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-secondary border-l-4 border-primary pl-4">
              Traksiyoner Akü Servis, Bakım, Onarım
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Traksiyoner akümülatörlerden daha fazla verim alınabilmesi için bakımlarının aksatılmadan yapılması gerekmektedir. Akü bakım işlemi akünün kapasitesinin sürekliliği için önemli bir işlemdir. Düzenli bakımları yapılan akülerin kapasite ve verimlilikleri sürekli en üst düzeyde olur.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Akü tamirinde ise; akünün arızalı veya ekonomik ömrü dolmuş olan parçaları (hücre, plaka, seperatör vs.) değiştirilerek akümülatörün eski kapasitesine ulaşması sağlanır.
            </p>
          </div>
          <div className="bg-white p-2 rounded-2xl shadow-xl">
            {/* Adding an illustrative box as a placeholder for an image if desired, or just styling */}
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-secondary flex items-center justify-center p-8">
              <div className="text-center">
                <svg className="w-20 h-20 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-2xl font-semibold text-tertiary">Enerjiniz Hiç Bitmesin</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 flex-col-reverse lg:flex-row-reverse">
          <div className="bg-white p-2 rounded-2xl shadow-xl lg:order-2">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-primary/10 flex items-center justify-center p-8 border-2 border-primary/20">
              <div className="text-center">
                <svg className="w-20 h-20 text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-2xl font-semibold text-secondary">Düzenli Bakım, Uzun Ömür</h3>
              </div>
            </div>
          </div>
          <div className="space-y-6 lg:order-1">
            <h2 className="text-3xl font-bold text-secondary border-l-4 border-primary pl-4">
              Traksiyoner Akü Tamir ve Bakım
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Traksiyoner akümülatörlerden daha fazla verim alınabilmesi için bakımlarının aksatılmadan yapılması gerekmektedir. Akü bakım işlemi akünün kapasitesinin sürekliliği için önemli bir işlemdir. Düzenli bakımları yapılan akülerin kapasite ve verimlilikleri sürekli en üst düzeyde olur.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Akü tamirinde ise; akünün arızalı veya ekonomik ömrü dolmuş olan parçaları (hücre, plaka, seperatör vs.) değiştirilerek akümülatörün eski kapasitesine ulaşması sağlanır.
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="bg-secondary text-tertiary rounded-3xl p-8 md:p-12 shadow-2xl mt-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-center text-primary">
              Tamir Bakımın Avantajları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                "Akümülatörün kullanım ömrünü uzatır.",
                "Akümülatörün performansını arttırır.",
                "Sülfat çözme işlemiyle şarj edilemeyen akümülatörlerin şarj edilmesi sağlanır.",
                "Yeniden şarjlama daha kısa sürede yapılır.",
                "Erken hücre bozulmaları engellenir.",
                "Çalışma vardiyaları arasında daha az akü değişikliği gerekir. Saf su tüketimini azaltır.",
                "Forklift elekrik ekipmanlarının ömrünü uzatır ve zarar görmesini engeller.",
                "İleride oluşubilecek arıza maliyetlerinin ve iş kaybının önüne geçilir."
              ].map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-200">
                    {advantage}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/iletisim" className="inline-block bg-primary hover:bg-yellow-500 text-secondary font-bold text-lg py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105 duration-300">
                Hemen İletişime Geçin
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AkuBakimServisi;
