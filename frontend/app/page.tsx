'use client';

import { useEffect, useState } from 'react';
import { fetchProducts, Product } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError('Failed to load products. Please make sure the backend server is running.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />


            {/* Main Content */}
            <main className="container py-8 mb-2">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Products</h2>
                    <p className="text-gray-600">Browse our collection of premium tech products</p>
                </div>

                {loading && (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                        <p className="mt-4 text-gray-600">Loading products...</p>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center">
                        <p className="text-red-700 font-semibold">{error}</p>
                        <p className="text-red-600 mt-2 text-sm">Make sure to run: cd backend && npm run dev</p>
                    </div>
                )}

                {!loading && !error && products.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No products found. Run the seed script to add products.</p>
                        <p className="text-sm text-gray-500 mt-2">cd backend && npm run seed</p>
                    </div>
                )}

                {!loading && !error && products.length > 0 && (
                    <div className="product-grid">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-16">
                <div className="container py-6 text-center text-gray-600">
                    <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
