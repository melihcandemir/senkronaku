import React from "react";

const stats = [
  { value: "10+", label: "Yıllık Deneyim" },
  { value: "500+", label: "Memnun Müşteri" },
  { value: "1000+", label: "Bakım Yapılan Akü" },
  { value: "7/24", label: "Teknik Destek" },
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-12 md:py-16 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000029 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-secondary/80 font-semibold text-sm md:text-base tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
