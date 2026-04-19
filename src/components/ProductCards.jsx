import React from 'react';
import akuHucreleriImg from '../assets/akühucreleri.jpg';
import akumulatorImg from '../assets/akümülatör.jpg';
import boruImg from '../assets/boru.jpg';
import fisImg from '../assets/fis.jpg';
import forkliftImg from '../assets/forklift.jpg';
import hucreImg from '../assets/hucre.jpg';
import kabloImg from '../assets/kablo.png';

const ProductCards = () => {
  const products = [
    { title: "Akümülatör Aksesuarları", image: akuHucreleriImg },
    { title: "Akümülatör Aksesuarları", image: akumulatorImg },
    { title: "Akümülatör Aksesuarları", image: boruImg },
    { title: "Akümülatör Aksesuarları", image: fisImg },
    { title: "Akümülatör Aksesuarları", image: hucreImg },
    { title: "Akümülatör Aksesuarları", image: kabloImg },
  ];

  return (
    <section className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
          Ürünlerimiz ve Yedek Parçalar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-secondary/10 flex flex-col"
            >
              <div className="h-56 overflow-hidden bg-gray-50 flex-grow">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-secondary text-tertiary text-center border-t border-primary/50">
                <h3 className="font-semibold text-lg tracking-wide">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
