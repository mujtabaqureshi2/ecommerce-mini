import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#39B54A',
                    dark: '#2d9139',
                    light: '#4bc95a',
                },
            },
            animation: {
                'spin': 'spin 1s linear infinite',
            },
        },
    },
    plugins: [],
};

export default config;
