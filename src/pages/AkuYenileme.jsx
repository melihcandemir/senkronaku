import React from 'react';
import { Link } from 'react-router-dom';
import akuYenilemeImg from '../assets/akuYenileme.jpg';

const AkuYenileme = () => {
  return (
    <div className="bg-tertiary w-full">
      {/* Hero Section */}
      <div className="bg-secondary text-tertiary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Akü Yenileme</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Düşük verimli akülerinizi yenileyerek maksimum performansa ve kapasiteye yeniden ulaşın.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-secondary border-l-4 border-primary pl-4">
              Traksiyoner Akü Yenileme
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Verimliliği düşük traksiyoner akülerin zaman içerisinde yenilenmesi performans anlamında son derece önemlidir.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Traksiyoner akümülatörlerden daha fazla verim alınabilmesi için bakımlarının aksatılmadan yapılması gerekmektedir. Akü bakım işlemi akünün kapasitesinin sürekliliği için önemli bir işlemdir. Düzenli bakımları yapılan akülerin kapasite ve verimlilikleri sürekli en üst düzeyde olur.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Akü tamirinde ise; akünün arızalı veya ekonomik ömrü dolmuş olan parçaları (hücre, plaka, seperatör vs.) değiştirilerek akümülatörün eski kapasitesine ulaşması sağlanır.
            </p>
          </div>
          <div className="bg-white p-2 rounded-2xl shadow-xl">
            <div className="w-full h-full rounded-xl overflow-hidden align-middle flex">
              <img 
                src={akuYenilemeImg} 
                alt="Akü Yenileme İşlemi" 
                className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 flex-col-reverse lg:flex-row-reverse">
          <div className="bg-white p-2 rounded-2xl shadow-xl lg:order-2">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-primary/10 flex items-center justify-center p-8 border-2 border-primary/20">
              <div className="text-center">
                <svg className="w-20 h-20 text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-semibold text-secondary">Zamanı Geri Alın</h3>
                <p className="mt-2 text-gray-700">Uzman kontrolünde eski kapasiteye ulaşım.</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                Teklif Alın
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AkuYenileme;
