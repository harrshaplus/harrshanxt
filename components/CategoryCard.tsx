import Image from 'next/image';

interface CategoryCardProps {
  name: string;
}

export default function CategoryCard({ name }: CategoryCardProps) {
  // Generate a category-specific placeholder image
  const imageUrl = `https://placehold.co/600x400/f1f5f9/1e293b?text=${name}`;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
      <div className="h-32 bg-gray-200 relative">
        <Image 
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 16vw"
          className="object-cover"
        />
      </div>
      <div className="p-3 text-center">
        <h3 className="font-medium text-secondary">{name}</h3>
      </div>
    </div>
  );
} 