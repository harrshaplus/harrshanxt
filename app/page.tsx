import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import Image from 'next/image';

// Sample product data
const featuredProducts = [
  { id: 1, name: 'Smart Water Bottle', brand: 'Hydrate Pro', price: 29.99 },
  { id: 2, name: 'Eco-Friendly Lunchbox', brand: 'Green Living', price: 24.50 },
  { id: 3, name: 'Solar Powered Charger', brand: 'EcoCharge', price: 39.99 },
  { id: 4, name: 'Bamboo Toothbrush Set', brand: 'EcoSmile', price: 12.99 },
];

// Sample category data
const categories = ['Kitchen', 'Home', 'Outdoor', 'Tech', 'Beauty', 'Wellness'];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="https://placehold.co/1920x1080/f8fafc/334155?text=Discover+Innovative+Products"
            alt="Hero background"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-secondary mb-6">Discover Products from Small Businesses</h2>
            <p className="text-lg text-gray-600 mb-8">Shop innovative, high-quality products from independent makers and entrepreneurs.</p>
            <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-10 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                name={product.name}
                brand={product.brand}
                price={product.price}
                imageId={product.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0 md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Support Small Businesses</h2>
              <p className="text-gray-200">Every purchase helps independent creators and makers bring their ideas to life.</p>
            </div>
            <div className="md:w-2/5 relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="https://placehold.co/800x600/f1f5f9/1e293b?text=Makers+Collection"
                alt="Makers collection"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-10 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category} name={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary bg-opacity-10 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="https://placehold.co/1920x1080/f8fafc/334155?text=Join+Our+Community"
            alt="Newsletter background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-8">Sign up to receive updates on new products and special offers.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
} 