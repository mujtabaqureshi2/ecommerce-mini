import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/api';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="card">
            <div className="relative w-full h-64 bg-gray-100">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>

                <div className="flex items-center justify-between mb-4">
                    <p className="text-2xl font-bold" style={{ color: 'var(--primary-green)' }}>
                        ${product.price.toFixed(2)}
                    </p>
                    <span className={`badge ${product.inStock ? 'badge-success' : 'badge-danger'}`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                </div>

                <Link href={`/product/${product._id}`}>
                    <button className="btn-primary w-full">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}
