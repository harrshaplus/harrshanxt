import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

// Sample product data
const products = [
  { id: 1, name: 'Smart Water Bottle', brand: 'Hydrate Pro', price: 29.99, category: 'Kitchen' },
  { id: 2, name: 'Eco-Friendly Lunchbox', brand: 'Green Living', price: 24.50, category: 'Kitchen' },
  { id: 3, name: 'Solar Powered Charger', brand: 'EcoCharge', price: 39.99, category: 'Tech' },
  { id: 4, name: 'Bamboo Toothbrush Set', brand: 'EcoSmile', price: 12.99, category: 'Beauty' },
  { id: 5, name: 'Reusable Grocery Bags', brand: 'Green Living', price: 15.99, category: 'Home' },
  { id: 6, name: 'Portable Blender', brand: 'BlendGo', price: 34.99, category: 'Kitchen' },
  { id: 7, name: 'Wireless Earbuds', brand: 'SoundCore', price: 49.99, category: 'Tech' },
  { id: 8, name: 'LED Desk Lamp', brand: 'BrightLife', price: 28.50, category: 'Home' },
];

export default function Shop() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Shop Header */}
      <div className="bg-gray-100 py-8 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="https://placehold.co/1920x600/f8fafc/334155?text=Shop+All+Products"
            alt="Shop banner"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl font-bold text-secondary">Shop All Products</h1>
          <p className="text-gray-600 mt-2">Discover innovative products from small businesses and makers</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4 lg:w-1/5">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {['All', 'Kitchen', 'Home', 'Tech', 'Beauty', 'Wellness'].map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        className="h-4 w-4 text-primary focus:ring-primary"
                      />
                      <label htmlFor={`category-${category}`} className="ml-2 text-gray-700">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="min-price" className="text-sm text-gray-600 block mb-1">Min</label>
                      <input
                        type="number"
                        id="min-price"
                        placeholder="0"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="max-price" className="text-sm text-gray-600 block mb-1">Max</label>
                      <input
                        type="number"
                        id="max-price"
                        placeholder="100"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Brand Filter */}
              <div>
                <h3 className="font-medium mb-3">Brand</h3>
                <div className="space-y-2">
                  {['All Brands', 'Hydrate Pro', 'Green Living', 'EcoCharge', 'EcoSmile', 'BlendGo', 'SoundCore', 'BrightLife'].map((brand) => (
                    <div key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`brand-${brand}`}
                        className="h-4 w-4 text-primary focus:ring-primary"
                      />
                      <label htmlFor={`brand-${brand}`} className="ml-2 text-gray-700">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-600">{products.length} Products</div>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-gray-600">Sort by:</label>
                <select
                  id="sort"
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  imageId={product.id}
                />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <nav>
                <ul className="flex space-x-2">
                  <li>
                    <button className="px-3 py-2 border rounded-md hover:bg-gray-100">
                      Previous
                    </button>
                  </li>
                  <li>
                    <button className="px-3 py-2 border rounded-md bg-primary text-white">
                      1
                    </button>
                  </li>
                  <li>
                    <button className="px-3 py-2 border rounded-md hover:bg-gray-100">
                      2
                    </button>
                  </li>
                  <li>
                    <button className="px-3 py-2 border rounded-md hover:bg-gray-100">
                      3
                    </button>
                  </li>
                  <li>
                    <button className="px-3 py-2 border rounded-md hover:bg-gray-100">
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 