import "./globals.css";
import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import LogoSwitcher from "@/components/LogoSwitcher";

export const metadata: Metadata = {
    title: "theDesigning Worlds Lab",
    description: "DW-L Rolodex — worlds in motion.",
    openGraph: {
        title: "theDesigning Worlds Lab",
        description: "DW-L Rolodex — worlds in motion.",
        type: "website",
    },
    icons: { icon: "/favicon.ico" },
};
export const viewport: Viewport = {
    themeColor: "#000000",
    colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <head>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        try {
                            const theme = localStorage.getItem('theme');
                            if (theme === 'dark') {
                                document.documentElement.classList.add('dark');
                            }
                        } catch (e) {}
                    `
                }} />
            </head>
            <body className="min-h-dvh">
                <ThemeProvider>
                    <header className="fixed top-0 left-0 right-0 z-[9999] p-4 md:p-6">
                        <div className="flex justify-center">
                            <Link href="/">
                                <LogoSwitcher />
                            </Link>
                        </div>
                    </header>
                    <ThemeToggle />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

