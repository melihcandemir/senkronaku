import React from 'react';
import { Link } from 'react-router-dom';

const uygulamaAlanlari = [
  'Elektrikli iş makineleri (İstif makineleri, personel taşıyıcılar, yükseltme araçları vb.)',
  'Yer temizleme makineleri',
  'Tekneler',
  'Maden araçları',
  'Demir yollarında kullanılan araçlar',
  'Golf araçları',
  'Karavanlar',
  'Diğer (Elektrik motoru ile çalışan mevcut ve yeni geliştirilen araçlar.)',
];

const ozellikler = [
  { icon: '⚡', baslik: 'Derin Deşarj', aciklama: 'Derin deşarja dayanıklı yapısıyla uzun süreli enerji sağlar.' },
  { icon: '🏗️', baslik: 'Sağlam Yapı', aciklama: 'Sarsıntı ve titreşime karşı yüksek dayanıklılık sunar.' },
  { icon: '🌱', baslik: 'Çevre Dostu', aciklama: 'Sıfır salınım sağlayarak sera gazı oluşumunu engeller.' },
  { icon: '🔋', baslik: 'Yüksek Kapasite', aciklama: 'Kalın ve dayanıklı plakalar sayesinde fazla şarj döngüsüne hazır.' },
];

const TraksiyonerAku = () => {
  return (
    <div className="bg-tertiary w-full">
      {/* Hero */}
      <div className="bg-secondary text-tertiary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Traksiyoner Aküler</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Elektrikli araçların güç kalbi — güvenilir, dayanıklı ve çevre dostu enerji çözümleri.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Ana Açıklama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-secondary border-l-4 border-primary pl-4">
              Traksiyoner Aküler Nedir?
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Temel enerji kaynağı olarak elektrik enerjisi kullanan "elektriklendirilmiş" araçlarda sürekli ve düzenli bir enerji gereksinimi söz konusudur. Bu tip sistemlerde gerek duyulan düzenli ve uzun süreli enerjiyi sistemin ana kaynağı olan derin deşarja dayanıklı Traksiyoner aküler sağlamaktadır.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Mevcut teknolojiler çerçevesinde Stasyoner uygulamalarda olduğu gibi, güvenilir ve ekonomik çözümü kurşun asit teknolojisi olduğu görülüyor. Kurşun asit teknolojili stasyoner akülere göre traksiyoner aküler yapıları gereği daha ağır ve hacimli akülerdir. Bu farklılık sayesinde daha sağlam, sarsıntı ve titreşime karşı daha dayanıklıdırlar.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Dış fiziki farklılıklarının yanı sıra, kullanım amaçları gereği iç dizaynlarında da farklılıklar söz konusu. Daha yüksek sayıda şarj deşarj döngüsüne ve derin deşarja maruz kalmaları nedeniyle, Traksiyoner akülerde kullanılan plakalar daha kalın ve dayanıklıdır.
            </p>
          </div>

          {/* Özellik Kartları */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ozellikler.map((o, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{o.icon}</div>
                <h3 className="text-lg font-bold text-secondary mb-2">{o.baslik}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{o.aciklama}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Çevre Dostu Bölümü */}
        <div className="bg-secondary rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary rounded-full opacity-10 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Çevre Dostu Teknoloji</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Traksiyoner akülerin kullanım alanı olan "elektriklendirilmiş" araçların çevre dostu teknolojiler olduğunu söyleyebiliriz. Küresel ısınmanın en büyük etkenlerinden sera gazı salınımı yapan içten yanmalı motorla çalışan araçlar yerlerini sıfır salınım sağlayan elektrik motorlu araçlara bırakıyorlar.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              Ayrıca elektrik motorlu araçlar, içten yanmalı motor ile çalışan araçlara göre daha sessiz olmaları nedeniyle ses kirliliğinin de önemli oranda azalmasına katkıda bulunuyorlar.
            </p>
          </div>
        </div>

        {/* Uygulama Alanları */}
        <div>
          <h2 className="text-3xl font-bold text-secondary border-l-4 border-primary pl-4 mb-10">
            Traksiyoner Akü Uygulama Alanları
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {uygulamaAlanlari.map((alan, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-md border-t-4 border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-3"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-secondary font-bold text-sm flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{alan}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg mb-6">Traksiyoner akü ihtiyaçlarınız için bizimle iletişime geçin.</p>
          <Link
            to="/iletisim"
            className="inline-block bg-primary hover:bg-yellow-500 text-secondary font-bold text-lg py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105 duration-300"
          >
            Hemen İletişime Geçin
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TraksiyonerAku;
