import ProductsPageCards from '../components/ProductsPageCards';

const Products = () => {
  return (
    <div className="w-full bg-tertiary flex flex-col min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl font-bold text-secondary text-center mb-8">Ürünlerimiz</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Senkron Akü olarak en kaliteli ve dayanıklı ürünleri sizlere sunmaktan gurur duyuyoruz.
        </p>
      </div>
      <ProductsPageCards />
    </div>

  );
};

export default Products;
