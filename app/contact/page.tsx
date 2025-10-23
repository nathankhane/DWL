export const metadata = { title: "Contact — theDesigning Worlds Lab" };

export default function ContactPage() {
    return (
        <main className="min-h-dvh flex items-center justify-center px-6">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-semibold text-black/90 dark:text-white/90">Contact</h1>
                <p className="text-black/80 dark:text-white/80">Email: <span className="font-mono">contact@thedesigningworlds.lab</span></p>
                <p className="text-black/50 dark:text-white/50 text-sm">A simple form and inbox routing are coming later.</p>
            </div>
        </main>
    );
}

