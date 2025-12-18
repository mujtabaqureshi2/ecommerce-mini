'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { fetchProductById, Product } from '@/lib/api';
import Image from 'next/image';
import Header from '@/components/Header';

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const id = params.id as string;
                const data = await fetchProductById(id);
                setProduct(data);
            } catch (err) {
                setError('Failed to load product details.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [params.id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                    <p className="mt-4 text-gray-600">Loading product...</p>
                </div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 font-semibold">{error || 'Product not found'}</p>
                    <button onClick={() => router.push('/')} className="btn-primary mt-4">
                        Back to Products
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />


            {/* Product Detail */}
            <main className="container py-12">
                <button
                    onClick={() => router.push('/')}
                    className="btn-secondary mb-8 flex items-center gap-2"
                >
                    <span>←</span> Back to Products
                </button>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h2>

                            <div className="mb-6">
                                <span className={`badge ${product.inStock ? 'badge-success' : 'badge-danger'}`}>
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>

                            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="mb-8">
                                <p className="text-sm text-gray-600 mb-2">Price</p>
                                <p className="text-4xl font-bold" style={{ color: 'var(--primary-green)' }}>
                                    ${product.price.toFixed(2)}
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    className="btn-primary flex-1"
                                    disabled={!product.inStock}
                                    style={!product.inStock ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => router.push('/')}
                                    className="btn-secondary"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
