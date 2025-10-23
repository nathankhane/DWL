import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#000000",
                fg: "#ffffff",
            },
            boxShadow: {
                'card': '0 10px 30px rgba(0,0,0,0.35)',
            },
        },
    },
    plugins: [],
};
export default config;

