import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Akü Bakım Servisi",
      description:
        "Traksiyoner akümülatörlerden daha fazla verim alınabilmesi için bakımlarının aksatılmadan yapılması gerekmektedir.",
    },
    {
      title: "Akü Yenileme",
      description:
        "Verimliliği düşük traksiyoner akülerin zaman içerisinde yenilenmesi performans anlamında son derece önemlidir.",
    },
    {
      title: "Akü Bakım Talimatı",
      description:
        "Akünün içindeki elektrolit sülfürik asit içeren bir çözelti olduğu için yakıcıdır el ve göz temasından kaçınılmalıdır.",
    },
    {
      title: "Tranksiyoner Akü",
      description:
        "Temel enerji kaynağı olarak elektrik enerjisi kullanan “elektriklendirilmiş” araçlarda sürekli ve düzenli bir enerji gereksinimi söz konusudur.",
    },
    { title: "Ölçü Listesi", description: "Akü Ölçüleri." },
  ];

  return (
    <section className="py-16 bg-tertiary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
          Hizmet Verdiğimiz Alanlar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-bold text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
