import Image from 'next/image';

interface ProductCardProps {
  name: string;
  brand: string;
  price: number;
  imageId?: number;
}

export default function ProductCard({ name, brand, price, imageId = 1 }: ProductCardProps) {
  // Generate a unique placeholder image for each product
  const imageUrl = `https://placehold.co/600x400/e2e8f0/334155?text=Product+${imageId}`;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <div className="h-64 bg-gray-200 relative">
        <Image 
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{brand}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-secondary">${price.toFixed(2)}</span>
          <button className="text-primary hover:text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 