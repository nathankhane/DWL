export const metadata = { title: "Contact — theDesigning Worlds Lab" };

export default function ContactPage() {
    return (
        <main className="min-h-dvh flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
            <div className="text-center space-y-2 sm:space-y-3 max-w-lg w-full">
                <h1 className="text-2xl sm:text-3xl font-semibold text-black/90 dark:text-white/90">Contact</h1>
                <p className="text-sm sm:text-base text-black/80 dark:text-white/80">Email: <span className="font-mono text-xs sm:text-sm">contact@thedesigningworlds.lab</span></p>
                <p className="text-black/50 dark:text-white/50 text-xs sm:text-sm">A simple form and inbox routing are coming later.</p>
            </div>
        </main>
    );
}

