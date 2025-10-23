"use client";

import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme();

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-4 md:top-6 right-4 md:right-6 z-[9999] p-3 rounded-full 
                 bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20
                 backdrop-blur-sm border border-white/10 transition-colors
                 focus-visible:ring-2 ring-white/80"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {theme === "light" ? (
                // Moon icon (for switching to dark mode)
                <svg
                    className="w-5 h-5 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            ) : (
                // Sun icon (for switching to light mode)
                <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            )}
        </motion.button>
    );
}

