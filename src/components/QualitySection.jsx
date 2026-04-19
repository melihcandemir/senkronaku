import React from 'react';
import { Clock, Zap, BatteryCharging } from 'lucide-react';

const QualitySection = () => {
  return (
    <section className="py-20 bg-secondary text-tertiary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Hizmet Kalitemiz
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            Senkron Akü, marka ve model farketmeksizin; Traksiyoner Aküler, Starter Aküler ve Stasyoner Akülerin Bakım, Yenileme, Servis ve Satış Hizmetlerini alanında uzman ve çağın gerektirdiği teknolojik alt yapıya sahip personeli ile kaliteden ödün vermeden yapmaktadır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-tertiary/5 p-8 rounded-xl backdrop-blur-sm border border-primary/20 flex flex-col items-center text-center">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">7/24 Hizmet Anlayışı</h3>
            <p className="text-gray-300 leading-relaxed">
              Bakım Hizmeti Süresince, iş kayıplarının önüne geçmek için ikame akü seçeneğimiz ile yanınızdayız.
            </p>
          </div>

          <div className="bg-tertiary/5 p-8 rounded-xl backdrop-blur-sm border border-primary/20 flex flex-col items-center text-center">
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">Profesyonel ve Hızlı Çözüm</h3>
            <p className="text-gray-300 leading-relaxed">
              Profesyonel ekibimiz ile marka ve model farketmeksizin satış ve satış sonrası hizmetimizle yanınızdayız.
            </p>
          </div>

          <div className="bg-tertiary/5 p-8 rounded-xl backdrop-blur-sm border border-primary/20 flex flex-col items-center text-center">
            <BatteryCharging className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">A’dan Z’ye Akü Çözümleri</h3>
            <p className="text-gray-300 leading-relaxed">
              Traksiyoner, Starter ve Stasyoner Akülerinize;<br/>Bakım, Servis ve Yedek Parça hizmetimizle yanınızdayız.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
