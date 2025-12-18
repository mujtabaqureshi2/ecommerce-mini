import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    inStock: boolean;
}

export interface LoginResponse {
    message: string;
    token: string;
    user: {
        id: string;
        email: string;
    };
}

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

// Fetch single product by ID
export const fetchProductById = async (id: string): Promise<Product> => {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
};

// Login
export const login = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};
