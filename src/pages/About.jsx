import React from 'react';

const About = () => {
  return (
    <div className="flex-grow bg-tertiary">
      {/* Hero Section */}
      <div className="bg-secondary px-4 py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmN2E3MDciIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] [background-size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4 animate-fade-in-down">
            Hakkımızda
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-tertiary">
            Senkron Akü: Güç, Enerji ve Güven.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,41,0.05)] border border-gray-100">
            <div className="p-8 sm:p-12 lg:p-16 space-y-10 text-gray-700 text-lg leading-relaxed pt-16 relative">
              {/* Decorative accent element */}
              <div className="absolute top-0 left-0 w-32 h-2 bg-primary rounded-br-full"></div>
              
              <div className="flex items-start">
                  <div className="flex-shrink-0 mt-2 mr-6 hidden sm:block">
                      <div className="w-12 h-12 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                      </div>
                  </div>
                  <div>
                    <p className="text-secondary font-medium tracking-wide">
                        Senkron Akü, marka ve model farketmeksizin; Traksiyoner Aküler, Starter Aküler ve Stasyoner Akülerin <span className="text-primary font-bold">Bakım, Yenileme, Servis ve Satış Hizmetlerini</span> alanında uzman ve çağın gerektirdiği teknolojik alt yapıya sahip personeli ile kaliteden ödün vermeden yapmaktadır.
                    </p>
                  </div>
              </div>

              <div className="flex items-start">
                  <div className="flex-shrink-0 mt-2 mr-6 hidden sm:block">
                      <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                          </svg>
                      </div>
                  </div>
                  <div>
                    <p>
                        Firmamız, sürdürülebilir bir ekonomi ve çevre için akülerinizin bakım, servis ve onarım işlerini alanında uzman personeli ile yapmaktadır. 
                        Koşulsuz müşteri memnuniyeti ilkesi ve toplam kalite yönetimi anlayışı ile hizmet veren firmamız, uygun ödeme seçenekleri ve ekonomik fiyatlandırma ile kaliteyi sizlere sunmaktadır.
                    </p>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
