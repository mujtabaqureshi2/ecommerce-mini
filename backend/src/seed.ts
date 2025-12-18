import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Product } from './models/Product';
import { User } from './models/User';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';

const sampleProducts = [
    {
        name: 'Wireless Headphones',
        description: 'Premium noise-cancelling wireless headphones with 30-hour battery life. Perfect for music lovers and professionals.',
        price: 199.99,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        inStock: true
    },
    {
        name: 'Smart Watch',
        description: 'Feature-packed smartwatch with fitness tracking, heart rate monitor, and GPS. Stay connected on the go.',
        price: 299.99,
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        inStock: true
    },
    {
        name: 'Laptop Stand',
        description: 'Ergonomic aluminum laptop stand with adjustable height. Improve your posture and workspace comfort.',
        price: 49.99,
        imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
        inStock: true
    },
    {
        name: 'Mechanical Keyboard',
        description: 'RGB backlit mechanical keyboard with tactile switches. Perfect for gaming and typing enthusiasts.',
        price: 129.99,
        imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
        inStock: false
    },
    {
        name: 'Wireless Mouse',
        description: 'Precision wireless mouse with ergonomic design and long battery life. Ideal for work and gaming.',
        price: 39.99,
        imageUrl: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
        inStock: true
    },
    {
        name: 'USB-C Hub',
        description: 'Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.',
        price: 59.99,
        imageUrl: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
        inStock: true
    }
];

const sampleUser = {
    email: 'test@example.com',
    password: 'password123'
};

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing data
        await Product.deleteMany({});
        await User.deleteMany({});
        console.log('🗑️  Cleared existing data');

        // Insert products
        const products = await Product.insertMany(sampleProducts);
        console.log(`✅ Inserted ${products.length} products`);

        // Create test user
        const user = await User.create(sampleUser);
        console.log(`✅ Created test user: ${user.email}`);

        console.log('\n🎉 Database seeded successfully!');
        console.log('\nTest credentials:');
        console.log('Email: test@example.com');
        console.log('Password: password123');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
